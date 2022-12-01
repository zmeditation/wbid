const { Access } = require("../services/access");

exports.Order = class {
  constructor() {}

  async init() {
    const Service = new Access("OrderService");
    this.OrderService = await Service.createAccess();
  }
  async createOrder() {
    await this.init();
    const order = {
      orders: [
        {
          name: "WMG HEADER BIDDING ORDER SET",
          advertiserId: "4771127494",
          traffickerId: "120879842"
        }
      ]
    };
    return this.OrderService.createOrders(order);
  }
  async allowOrder(id) {
    await this.init();
    return this.OrderService.performOrderAction({
      orderAction: {
        attributes: { "xsi:type": "ApproveOrders" }
      },
      filterStatement: { query: [`WHERE id = ${id}`] }
    });
  }
};
