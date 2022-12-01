const { Access } = require("../services/access");

exports.Creative = class {
  constructor() {}
  async init() {
    const Service = new Access("CreativeService");
    this.CreativeService = await Service.createAccess();
  }
  async createCreative({ configname, size, creative }) {
    await this.init();
    let cr = {
      creatives: [
        {
          attributes: { "xsi:type": "ThirdPartyCreative" },
          advertiserId: "49711802",
          name: `${configname}_${size.width}x${size.height}_creative_W_BID`,
          size: [
            {
              width: size.width,
              height: size.height,
              isAspectRatio: false
            }
          ],
          snippet: creative,
          isSafeFrameCompatible: false
        }
      ]
    };

    return this.CreativeService.createCreatives(cr);
  }
  async generateCreative(sizes, creative, lines) {
    await this.init();
    let code = `<script>
                        let w = window;
                        for (i = 0; i < 10; i++) {
                          w = w.parent;
                          if (w.pbjs) {
                            try {
                              w.pbjs.renderAd(document, '%%PATTERN:hb_adid%%');
                              break;
                            } catch (e) {
                              continue;
                            }
                          }
                        }
                </script>`;

    let crs = generateCreatives(sizes, code);
    return new Promise(resolve => {
      this.CreativeService.createCreatives(crs)
        .then(data => {
          resolve(data);
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    });

    // console.log(lines);
    // let connect = [];
    // crs.creatives.forEach(cr=>{
    //     lines.forEach(line=>{
    //         connect.push(Object.assign({}, {
    //                     lineItemId: line.id,
    //                     creativeId: cr.name
    //         }))
    //     })
    // });
    // console.log(connect);
  }
  async updateCreative(configname, id, creative, width, height) {
    await this.init();
    const cr = {
      creatives: [
        {
          attributes: { "xsi:type": "ThirdPartyCreative" },
          advertiserId: "49711802",
          id,
          name: `${configname}_${width}x${height}_creative_W_BID`,
          size: [
            {
              width,
              height,
              isAspectRatio: false
            }
          ],
          snippet: creative,
          isSafeFrameCompatible: false
        }
      ]
    };
    return this.CreativeService.updateCreatives(cr);
  }
};

function generateCreatives(sizes, creative) {
  let cr = {};
  let creatives = [];
  sizes.forEach(s => {
    creatives.push(
      Object.assign(
        {},
        {
          attributes: { "xsi:type": "ThirdPartyCreative" },
          advertiserId: "49711802",
          name: `creative_${s.size.width}x${s.size.height}_W_BID`,
          size: [
            {
              width: s.size.width,
              height: s.size.height,
              isAspectRatio: false
            }
          ],
          snippet: creative,
          isSafeFrameCompatible: false
        }
      )
    );
  });
  cr = { creatives: creatives };
  return cr;
}
