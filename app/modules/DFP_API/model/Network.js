const { Access } = require("../services/access");
exports.Network = class {
  constructor() {}

  async init() {
    const Service = new Access("NetworkService");
    this.NetworkService = await Service.createAccess();
  }
  async getCurrentNetwork() {
    await this.init();
    return this.NetworkService.getCurrentNetworkAsync();
  }
};
