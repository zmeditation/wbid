const { Access } = require("../services/access");
const Dfp = require("node-google-dfp");

exports.Targeting = class {
  constructor() {
    this.statement = new Dfp.Statement("WHERE customTargetingKeyId = 10763479");
  }
  async init() {
    const Service = new Access("CustomTargetingService");
    this.CustomTargetingService = await Service.createAccess();
  }
  async getCustomTargeting() {
    await this.init();
    return new Promise(resolve => {
      this.CustomTargetingService.getCustomTargetingValuesByStatement(
        this.statement
      ).then(data => {
        // console.log(data);
        resolve(
          data.results.map(t => {
            return { id: t.id, name: t.name, keyid: t.customTargetingKeyId };
          })
        );
      });
    });
  }
};
