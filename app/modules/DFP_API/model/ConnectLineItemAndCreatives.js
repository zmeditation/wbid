const { Access } = require("../services/access");

exports.ConnectLineItemAndCreatives = class {
  constructor() {}
  async init() {
    const Service = new Access("LineItemCreativeAssociationService");
    this.LineItemCreativeAssociationService = await Service.createAccess();
  }
  async connectLineItemsAndCreatives(creatives, lines) {
    await this.init();
    let connect = [];
    creatives.forEach(cr => {
      lines.forEach(line => {
        connect.push(
          Object.assign(
            {},
            {
              lineItemId: line.id,
              creativeId: cr.id,
            }
          )
        );
      });
    });

    let objectConnect = { lineItemCreativeAssociations: connect };
    return this.LineItemCreativeAssociationService.createLineItemCreativeAssociations(
      objectConnect
    );
  }
};
