const {AccessOverOAuth2} = require("../../services/Auth/access");
const {ErrorHandler} = require("../handlers/error-handler");
const fs = require("fs");

exports.Network = class extends ErrorHandler {
    constructor() {
        super();
    }

    async init() {
        const service = new AccessOverOAuth2();
        this.NetworkService = await service.getService("NetworkService");
    }

    async checkNetworkValidity(networkCode) {
        try {
            await this.init();
            return new Promise(resolve => {
                fs.readFile(
                    "./app/modules/DFP_API/services/Auth/network.json",
                    "utf-8",
                    (err, data) => {
                        if (err) console.log(err);
                        let {network} = JSON.parse(data);
                        resolve(network === networkCode);
                    }
                );
            });
        } catch (e) {
            this.handle(e);
        }
    }

    async getNetwork() {
        try {
            await this.init();
            let [{rval}] = await this.NetworkService.getCurrentNetworkAsync();
            if (rval !== undefined) {
                return rval;
            } else {
                // err.cause.root.Envelope.Body.Fault.faultstring
                this.handle({
                    cause: {
                        root: {
                            Envelope: {Body: {Fault: {faultstring: "Not Auth"}}}
                        }
                    }
                });
            }
        } catch (e) {
            this.handle(e);
        }
    }

    async createTestNetwork() {
        try {
            await this.init();
            let [{rval}] = await this.NetworkService.makeTestNetworkAsync();
            console.log(rval);
        } catch (e) {
            this.handle(e);
        }
    }
};
