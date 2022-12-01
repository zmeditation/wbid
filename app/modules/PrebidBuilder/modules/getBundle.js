const fse = require("fs-extra");
const UglifyJS = require("uglify-es");
const nodeBundle = require("../../../../app/modules/PrebidBuilder/core/gulpfile.js");
const {getFileName} = require("./getFileName");
const {getPrebidConfig} = require("./getPrebidConfig");
const {WMGLogo} = require("./minifiedWmgLogo");
const {customCMP} = require("./customCMP");
const {Socket} = require("../../../../app/server/socket");
const io = new Socket();
require("colors");

module.exports.getBundle = async (modules, name, width, height, cmp, socketId, typeOfConfig, payload, isEdit = false) => {
    try {
        let {analytics, analyticsEnable, currency, server, cdnpath, amazon, schain, supplyChain, usp, thirdPartyCMP} = payload;
        if (!Array.isArray(modules)) {
            modules = [modules];
        }

        if (cmp === "true" || cmp === true) {
            modules.unshift("consentManagement");
        }

        if (usp === "true" || usp === true) {
            modules.unshift("consentManagementUsp");
        }

        if (currency) {
            modules.unshift('currency');
        }

/*         if (modules.includes('criteoBidAdapter')) {
            modules.unshift('criteoIdSystem', 'userId');
        } */

        if (analyticsEnable === 'true' && analytics) { // if analytics enabled for this config, add adapters to bundle
            if (!Array.isArray(analytics)) {
                analytics = [analytics]
            }
            let analyticsModules = analytics.map(module => module + 'AnalyticsAdapter');
            modules.unshift(analyticsModules);
        }

        if (server) {
            modules.unshift('prebidServerBidAdapter');
            server = JSON.parse(server);
            if (server.test === true) {
                modules.unshift('s2sTesting');
            }
        }

        if (schain === 'true' || supplyChain === 'true') {
            console.log('schain detected');
            modules.unshift('schain');
        }

        modules = modules.reduce((acc, val) => acc.concat(val), []);

        let bundle = await nodeBundle(modules);
        if (typeOfConfig === 'prebid') {
            let config = await getPrebidConfig(payload);
            let uglified = UglifyJS.minify(config);
            if (uglified['error'] === undefined) {
                bundle += uglified['code'];
            } else {
                console.error(uglified['error']);
                bundle += config;
            }
            console.log('Prebid config generated'.green);
        }
        if (payload.creative && payload.creative.length) {
            bundle += payload.creative;
            console.log('Postbid config added to bundle'.green);
        }

        if (payload.logo && payload.logo === 'true') {
            let wmgLogoCode = await WMGLogo();
            bundle += wmgLogoCode;
            console.log('WMG Logo code added to bundle'.green);
        }

        if (payload.dev !== 'true') {
            if ((amazon === true || amazon === 'true') && payload.creative) {
                console.log('Amazon and Google CDN included'.green);
                const amazonCdn = `!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");`;
                let googleTagCdn = UglifyJS.minify(`(function() {
                      var gads = document.createElement('script');
                      var useSSL = 'https:' == document.location.protocol;
                      gads.src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
                      var node = document.getElementsByTagName('script')[0];
                      node.parentNode.insertBefore(gads, node);
                  })();
            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];`);
                if (googleTagCdn['error'] === undefined) {
                    googleTagCdn = googleTagCdn['code'];
                } else {
                    console.error(config['error']);
                }
                bundle = amazonCdn + googleTagCdn + bundle;
            }
        } else {
            if ((amazon === true || amazon === 'true') && payload.creative) {
                console.log('GoogleInit function, Amazon and Google CDN included'.green);
                const amazonCdn = `!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");`;
                let googleTagCdn = UglifyJS.minify(`(function() {
                      var gads = document.createElement('script');
                      var useSSL = 'https:' == document.location.protocol;
                      gads.src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
                      var node = document.getElementsByTagName('script')[0];
                      node.parentNode.insertBefore(gads, node);
                  })();
            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];`);
                if (googleTagCdn['error'] === undefined) {
                    googleTagCdn = googleTagCdn['code'];
                } else {
                    console.error(config['error']);
                }
                let googleInitCode = payload.googleTag;
                bundle = googleInitCode + amazonCdn + googleTagCdn + bundle;
            } else {
                console.log('GoogleInit function included'.green);
                let googleInitCode = payload.googleTag;
                bundle = googleInitCode + bundle;
            }
        }

        if (thirdPartyCMP === 'true') { // add third-party CMP module
           console.log('Custom CMP module included into bundle'.green);
           const customCMPCode = await customCMP();
           bundle = customCMPCode + bundle;
        }

        let filepath;
        if (isEdit === true && cdnpath) {
            filepath = `./app/dist/${cdnpath.substring(cdnpath.lastIndexOf("/") + 1)}`;
            await fse.writeFile(filepath, bundle);
            io.push('PBJS_GENERATED', false, socketId, 'info');
            console.log(
                "Prebid bundle".green,
                `${cdnpath.substring(cdnpath.lastIndexOf("/") + 1)}`.red,
                "was generated.".green
            );
        } else {
            filepath = `./app/dist/${getFileName(name, width, height)}`;
            await fse.writeFile(filepath, bundle);
            io.push('PBJS_GENERATED', false, socketId, 'info');
            console.log(
                "Prebid bundle".green,
                `${getFileName(name, width, height)}`.red,
                "was generated.".green
            );
        }
        return filepath;
    } catch (e) {
        console.log(e);
    }
};
