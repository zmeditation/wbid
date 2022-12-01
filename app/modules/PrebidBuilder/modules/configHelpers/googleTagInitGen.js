module.exports.googleTagInit = async (adUnitId, floorPrice, sizes, domain, adExId) => {
const divId = `div-gpt-ad-${(Math.random() * 10000000).toFixed().toString()}`;
const googleTag = `
(function(id, floor) {
  var scriptId = 'wmg-script-${adUnitId}';
  var this_block = document.getElementById(id),
      block_parent = this_block.parentNode,
      tagNameOfParent = block_parent.tagName,
      block_wmg = document.createElement('div'),
      script_gg = document.createElement('script'),
      script_gg_2 = document.createElement('script');
      script_gg.async = true;
      script_gg.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
      block_wmg.id = '${divId}';
      script_gg_2.innerHTML = \`window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
        googletag.defineSlot('/112081842/${adExId}', [${sizes}], '${divId}').setTargeting('hb-calls-adx', [${floorPrice}]).addService(googletag.pubads());
        googletag.pubads().disableInitialLoad(),
        googletag.pubads().enableSingleRequest();
        googletag.pubads().set('page_url', '${domain}');
        googletag.pubads().collapseEmptyDivs();
        console.log('defined google adx "/112081842/${adExId}"');
        googletag.enableServices();
      });\`;

      // потом сделать проверку на наличие амазона и вставлять по необходимости  
      block_wmg.appendChild(script_gg); /* Если код с амазоном тег гугла вставлять не надо. Это замедляет работу, так как код cdn дублируется */

     
      block_wmg.appendChild(script_gg_2);
      if (tagNameOfParent !== 'HEAD') {
        block_parent.appendChild(block_wmg);
      } else {
        var next_body = block_parent.nextElementSibling;
        console.log(next_body);
        next_body.appendChild(block_wmg);
      }

})('wmg-script-${adUnitId}', '${floorPrice}');
`
    return {googleTag, divId};
};
