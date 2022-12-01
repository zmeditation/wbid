exports.TagGenerator = class {
    constructor() {
    }

    static generateTag({unit}, domain) {
        const hash = `div-wmg-id_${Math.random()
            .toString(36)
            .substr(2, 9)}`;

        return {
            fulltag: `<!DOCTYPE HTML>
<html lang="en-us">
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <style type="text/css" media="screen">
    </style>
    <script async='async' src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script>
    <script>
        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
    </script>
    <script>
        googletag.cmd.push(function() {
            googletag.defineSlot('/112081842/PostBid_AdUnit/${
                unit[0].adUnitCode
            }',[${unit[0].adUnitSizes[0].size.width}, ${
                unit[0].adUnitSizes[0].size.height
            }], '${hash}').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.pubads().set('page_url', '${domain}');
            googletag.enableServices();
        });
    </script>
</head>
<body>
    <div id='${hash}' style='height:${unit[0].adUnitSizes[0].size.height}px; width:${unit[0].adUnitSizes[0].size.width}px;'>
        <script>
            googletag.cmd.push(function(){ 
                googletag.display('${hash}')
            });
        </script>
    </div>
</body>`,
            passbackTag: `<script src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'>
      googletag.pubads()
            .definePassback('/112081842/PostBid_AdUnit/${unit[0].id}', [${unit[0].adUnitSizes[0].size.width}, ${unit[0].adUnitSizes[0].size.height}])
            .set('page_url', '${domain}')
            .display();
</script>`
        };
    }
};
