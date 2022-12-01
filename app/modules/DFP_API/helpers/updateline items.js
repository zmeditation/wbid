const { Access } = require("../services/access");
const Dfp = require("node-google-dfp");
const fse = require("fs-extra");
(async () => {
  try {
    const statement = new Dfp.Statement("WHERE OrderId = 2338140239");
    const Service = new Access("LineItemService");
    const LineItemsService = await Service.createAccess();
    let lineitems = await LineItemsService.getLineItemsByStatement(statement);
    // let item = 1;
    for (let item = 300; item <= 420; item++) {
      await fse.writeJson("lineitem1.json", lineitems.results[item]);
      let { targeting } = lineitems.results[item];
      let geoTargeting = {
        excludedLocations: [
          { id: "2804", type: "COUNTRY", displayName: "Ukraine" }
        ]
      };
      lineitems.results[item].targeting = { geoTargeting, ...targeting };
      delete lineitems.results[item].targeting.requestPlatformTargeting;
      await fse.writeJson("lineitem.json", lineitems.results[item]);
      let object = await fse.readJson("lineitem.json");
      await LineItemsService.updateLineItems({ lineItems: [object] });
    }
  } catch (e) {
    console.log(e);
  }

  // console.log(i.results[0].targeting.geoTargeting.excludedLocations);
})();
