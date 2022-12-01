module.exports.protectedMediaGenerator = function (domain, adUnitId, dashboardId, sizes) {

    function extractHostname(url) {
        let hostname;

        if (url.indexOf("//") > -1) {
            hostname = url.split('/')[2];
        } else {
            hostname = url.split('/')[0];
        }

        hostname = hostname.split(':')[0];
        hostname = hostname.split('?')[0];

        return hostname;
    }

    try {
        const scriptSource =  `https://js.ad-score.com/score.min.js?pid=1000804&tid=wbid&l1=${dashboardId}&l2=${adUnitId}&pub_domain=${extractHostname(domain)}&l3=${sizes}&creative_type=banner&tt=if,g`
        const imgSource = `https://data.ad-score.com/img?s=ns&pid=1000804&tid=wbid&l1=${dashboardId}&l2=${adUnitId}&pub_domain=${extractHostname(domain)}&l3=${sizes}&creative_type=banner&tt=if,g`
        console.log(
            {
                script: scriptSource,
                img: imgSource
            }
        )
        return {
            script: scriptSource,
            img: imgSource
        }
    } catch (e) {
        console.log(e);
        return {};
    }
}
