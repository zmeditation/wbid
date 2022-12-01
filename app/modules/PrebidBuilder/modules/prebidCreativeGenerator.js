const fs = require('fs-extra');

module.exports.prebidCreativeGenerator = async (width, height, adUnitCode, CdnUrl) => {

    const creative = `<html>
  <head>
    <script>
      (function() {
        var loadGPT = function() {
          var gads = document.createElement("script");
          var useSSL = "https:" === document.location.protocol;
          gads.src =
            (useSSL ? "https:" : "http:") +
            "//securepubads.g.doubleclick.net/tag/js/gpt.js";
          var node = document.getElementsByTagName("script")[0];
          node.parentNode.insertBefore(gads, node);
        };
        setTimeout(loadGPT, 500);
      })();
      (function() {
        var wmgads = document.createElement("script");
        wmgads.async = true;
        wmgads.type = "text/javascript";
        wmgads.src = "${CdnUrl}";
        var node = document.getElementsByTagName("script")[0];
        node.parentNode.insertBefore(wmgads, node);
      })();
    </script>
    <script>
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
      googletag.cmd.push(function() {
        googletag.pubads().disableInitialLoad();
      });
      googletag.cmd.push(function() {
        googletag
          .defineSlot("${adUnitCode}", [${width}, ${height}], "wbid-${adUnitCode.substring(adUnitCode.lastIndexOf("/") + 1)}")
          .addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
    </script>
  </head>

  <body>
    <div id="wbid-${adUnitCode.substring(adUnitCode.lastIndexOf("/") + 1)}">
      <script type="text/javascript">
        googletag.cmd.push(function() {
          googletag.display("wbid-${adUnitCode.substring(adUnitCode.lastIndexOf("/") + 1)}");
        });
      </script>
    </div>
  </body>
</html>`;

    if (process.env.NODE_ENV === 'development') {
        await fs.writeFile('./app/modules/PrebidBuilder/dist/pb-creative.txt', creative);
    }

    return creative;

};
