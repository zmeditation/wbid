const {AccessOverOAuth2} = require("../../services/Auth/access");
const Dfp = require("node-google-dfp");
exports.User = class {
    constructor() {
        this.statement = new Dfp.Statement("WHERE roleId = -1");
    }

    async init() {
        const service = new AccessOverOAuth2("21837127767");
        this.UserService = await service.getService("UserService");
    }

    async getUser() {
        await this.init();
        const [{rval}] = await this.UserService.getUsersByStatementAsync(
            this.statement
        );
        return rval.results.filter(user => {
            return user.isServiceAccount === false && user.isActive === true;
        });
    }
};
