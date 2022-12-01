const { Access } = require("../services/access");
const Dfp = require("node-google-dfp");

exports.Company = class {
  constructor() {
    this.statement = new Dfp.Statement("WHERE type = 4761582646");
  }

  async init() {
    const Service = new Access("CompanyService");
    this.CompanyService = await Service.createAccess();
  }
  async getCompanies() {
    await this.init();
    return this.CompanyService.getCompaniesByStatement(this.statement);
  }
  async createCompany() {
    const company = {
      companies: [
        {
          name: "WMG International Bidder",
          type: "ADVERTISER"
        }
      ]
    };
    await this.init();
    return this.CompanyService.createCompanies(company);
  }
};
