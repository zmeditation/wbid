const { Access } = require("../services/access");
const Dfp = require("node-google-dfp");

exports.User = class {
  constructor() {
    this.getAllUsersStatement = new Dfp.Statement("WHERE roleId = -1");
  }

  async init() {
    const Service = new Access("UserService");
    this.UserService = await Service.createAccess();
  }
  async getUsers() {
    await this.init();
    return await this.UserService.getUsersByStatement(
      this.getAllUsersStatement
    );
  }
};
