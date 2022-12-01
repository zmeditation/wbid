const {AccessOverOAuth2} = require("../../services/Auth/access");
const Dfp = require("node-google-dfp");
const {ErrorHandler} = require("../handlers/error-handler");

exports.Order = class extends ErrorHandler {
    constructor() {
        super();
    }

    async init() {
        const service = new AccessOverOAuth2();
        this.OrderService = await service.getService("OrderService");
    }

    async checkIfOrderExist(order) {
        try {
            await this.init();
            this.statement = new Dfp.Statement(`WHERE name = \'${order}\'`);
            const [{rval}] = await this.OrderService.getOrdersByStatementAsync(this.statement);
            return rval.totalResultSetSize !== 0
                ? {
                    orderData: [
                        {id: rval.results[0].id, status: rval.results[0].status}
                    ]
                }
                : {orderData: null};
        } catch (e) {
            this.handle(e);
        }
    }

    async createOrder(name, advertiserId, traffickerId) {
        try {
            await this.init();
            const order = {
                orders: [
                    {
                        name,
                        advertiserId,
                        traffickerId
                    }
                ]
            };
            let [{rval}] = await this.OrderService.createOrdersAsync(order);
            return rval;
        } catch (e) {
            this.handle(e);
        }
    }

    async activateOrder(id) {
        try {
            await this.init();
            return this.OrderService.performOrderActionAsync({
                orderAction: {
                    attributes: {"xsi:type": "ApproveOrders"}
                },
                filterStatement: {query: [`WHERE id = ${id}`]}
            });
        } catch (e) {
            this.handle(e);
        }
    }
};
