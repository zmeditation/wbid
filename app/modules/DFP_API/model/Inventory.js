const { Access } = require("../services/access");
const Dfp = require("node-google-dfp");

exports.Inventory = class {
  constructor() {
    this.statementSizes = new Dfp.Statement("WHERE targetPlatform = ANY");
    this.statementAdUnits = new Dfp.Statement("WHERE id = 21802035898");
    this.statementPlacement = new Dfp.Statement("WHERE id = 29777980"); // placement ID (last 8 digits)
  }
  async init() {
    const ServiceInventory = new Access("InventoryService");
    this.InventoryService = await ServiceInventory.createAccess();
    const ServicePlacement = new Access("PlacementService");
    this.PlacementService = await ServicePlacement.createAccess();
  }

  async getSizes() {
    await this.init();
    return new Promise(resolve => {
      this.InventoryService.getAdUnitSizesByStatement(this.statementSizes).then(
        sizes => {
          resolve(
            sizes
              .filter(t => {
                return (
                  t.size.width !== -1 &&
                  t.size.height !== 0 &&
                  t.size.isAspectRatio === false
                );
              })
              .map(s => {
                return { size: s.size };
              })
          );
        }
      );
    });
  }
  // '111081962';
  async createAdUnit({ configname, size }) {
    await this.init();

    const PARENT_AD_UNIT_ID = /Amazon/.test(configname)
      ? "21822761471"
      : "21802035898";
    const adUnit = {
      adUnits: [
        {
          parentId: PARENT_AD_UNIT_ID,
          name: `${configname}_${size.width}x${
            size.height
          }_postbid_${Math.random()
            .toString(36)
            .substr(2, 9)}`,
          adUnitCode: `${configname}_${size.width}x${
            size.height
          }_postbid_${Math.random()
            .toString(36)
            .substr(2, 9)}`,
          adUnitSizes: [
            {
              size: {
                width: size.width,
                height: size.height
              },
              fullDisplayString: `${configname}_${size.width}x${
                size.height
              }_postbid`
            }
          ]
        }
      ]
    };
    return this.InventoryService.createAdUnits(adUnit);
  }

  async addToPlacement(adunit) {
    await this.init();
    let placement = await this.PlacementService.getPlacementsByStatement(
      this.statementPlacement
    );
    placement.results[0]["targetedAdUnitIds"].push(adunit[0].id);
    return new Promise((resolve, reject) => {
      this.PlacementService.updatePlacements({
        placements: placement.results[0]
      })
        .then(placement => {
          resolve(placement);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  async removeFromPlacement(id) {
    await this.init();
    let placement = await this.PlacementService.getPlacementsByStatement(
      this.statementPlacement
    );
    const index = placement.results[0]["targetedAdUnitIds"].findIndex(
      index => index === id
    );
    placement.results[0]["targetedAdUnitIds"].splice(index, 1);
    return new Promise((resolve, reject) => {
      this.PlacementService.updatePlacements({
        placements: placement.results[0]
      })
        .then(placement => {
          resolve(placement);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  async archiveAdUnit(id) {
    await this.init();
    return this.InventoryService.performAdUnitAction({
      adUnitAction: { attributes: { "xsi:type": "ArchiveAdUnits" } },
      filterStatement: { query: [`WHERE id = ${id}`] }
    });
  }
  async getAdUnit() {
    await this.init();
    this.InventoryService.getAdUnitsByStatement(this.statementAdUnits).then(
      adunits => {
        console.log(adunits);
      }
    );
  }
};
