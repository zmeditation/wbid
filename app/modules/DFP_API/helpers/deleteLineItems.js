const { Access } = require("../services/access");
const Dfp = require("node-google-dfp");
const fs = require("fs");
(async () => {
  try {
    let statementOrder = new Dfp.Statement("WHERE OrderId = 2505065493");

    const Service = new Access("LineItemService");
    const LineItemService = await Service.createAccess();
    let { results } = await LineItemService.getLineItemsByStatement(
      statementOrder
    );
    let m = results
      .filter(el => {
        return el.isArchived === true;
      })
      .map(el => {
        return el.id;
      });

    await LineItemService.performLineItemAction({
      lineItemAction: {
        attributes: { "xsi:type": "DeleteLineItems" }
      },
      filterStatement: { query: [`WHERE id =  4988419819`] }
    });
    fs.writeFile("res.json", JSON.stringify(m), f => {
      console.log(f);
    });
  } catch (e) {
    console.log(e);
  }
})();
