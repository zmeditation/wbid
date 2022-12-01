const {AccessOverOAuth2} = require("../../services/Auth/access");
const Dfp = require("node-google-dfp");
const {ErrorHandler} = require("../handlers/error-handler");
exports.Company = class extends ErrorHandler {
    constructor() {
        super();
    }

    async init() {
        const service = new AccessOverOAuth2();
        this.CompanyService = await service.getService("CompanyService");
    }

    async checkIfCompanyExist(company) {
        try {
            await this.init();
            this.statement = new Dfp.Statement(`WHERE name = \'${company}\'`);
            const [{rval}] = await this.CompanyService.getCompaniesByStatementAsync(
                this.statement
            );
            return rval.totalResultSetSize !== 0
                ? {companyData: [{id: rval.results[0].id}]}
                : {companyData: null};
        } catch (e) {
            this.handle(e);
        }
    }

    async createCompany(name) {
        try {
            await this.init();
            const company = {
                companies: [
                    {
                        name,
                        type: "ADVERTISER"
                    }
                ]
            };
            const [{rval}] = await this.CompanyService.createCompaniesAsync(
                company
            );
            return rval;
        } catch (e) {
            this.handle(e);
        }
    }

    async getCompany(companyData) {
        try {
            await this.init();
            this.statement = new Dfp.Statement(`WHERE id = ${companyData}`);
            const [{rval}] = await this.CompanyService.getCompaniesByStatementAsync(
                this.statement
            );
            return rval.results[0];
        } catch (e) {
            this.handle(e);
        }
    }
};
