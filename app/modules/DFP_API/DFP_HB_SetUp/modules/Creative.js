const {AccessOverOAuth2} = require("../../services/Auth/access");
const Dfp = require("node-google-dfp");
const {ErrorHandler} = require("../handlers/error-handler");
const fs = require('fs-extra');
exports.Creative = class extends ErrorHandler {
    constructor() {
        super();
    }

    async init() {
        const service = new AccessOverOAuth2();
        this.CreativeService = await service.getService("CreativeService");
    }

    async checkIfCreativesExist(advertiserId) {
        try {
            await this.init();
            this.statement = new Dfp.Statement(
                `WHERE advertiserId = ${advertiserId} AND width = 1 AND height = 1 `
            );
            const [
                {rval}
            ] = await this.CreativeService.getCreativesByStatementAsync(
                this.statement
            );
            return rval.totalResultSetSize === 0;
        } catch (e) {
            await this.handle(e);
        }
    }

    async createCreatives(sizes, advertiserId) {
        try {
            await this.init();
            let creatives = [];
            const snippet = `<script src = "https://cdn.jsdelivr.net/npm/prebid-universal-creative@latest/dist/creative.js"></script>
            <script>
              var ucTagData = {};
              ucTagData.adServerDomain = "";
              ucTagData.pubUrl = "%%PATTERN:url%%";
              ucTagData.targetingMap = %%PATTERN:TARGETINGMAP%%;
              ucTagData.hbPb = "%%PATTERN:hb_pb%%";
              try {
                ucTag.renderAd(document, ucTagData);
              } catch (e) {
                console.log(e);
              }
            </script>`;
            sizes.forEach(s => {
                creatives.push(
                    Object.assign(
                        {},
                        {
                            attributes: {"xsi:type": "ThirdPartyCreative"},
                            advertiserId,
                            name: `creative_${s.size.width}x${s.size.height}_W_BID`,
                            size: [
                                {
                                    width: 1,
                                    height: 1,
                                    isAspectRatio: false
                                }
                            ],
                            snippet,
                            isSafeFrameCompatible: false
                        }
                    )
                );
            });
            const cr = {creatives: creatives};
            const [{rval}] = await this.CreativeService.createCreativesAsync(cr);
            return rval;
        } catch (e) {
            await this.handle(e);
        }
    }

    async getCreatives(advertiserId) {
        try {
            this.statement = new Dfp.Statement(
                `WHERE advertiserId = ${advertiserId} AND width = 1 AND height = 1 `
            );
            await this.init();
            const [
                {rval}
            ] = await this.CreativeService.getCreativesByStatementAsync(
                this.statement
            );

            return rval.results.reduce((acc, current) => {
                const x = acc.find(item => item.name === current.name);
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);
        } catch (e) {
            await this.handle(e);
        }
    }
};
