const { Access } = require("../services/access");
const { Targeting } = require("./Targeting");

exports.LineItem = class extends Targeting {
  constructor() {
    super();
  }
  async init() {
    const Service = new Access("LineItemService");
    this.LineItemsService = await Service.createAccess();
  }
  async makeLineItem({ configname, size, unit, POST_BID_ORDER_ID }) {
    await this.init();
    const line = {
      lineItems: [
        {
          orderId: POST_BID_ORDER_ID,
          name: `${configname}_${size.width}x${
            size.height
          }_postbid_lineItem_${Math.random()
            .toString(36)
            .substr(2, 9)}`,
          startDateTimeType: "IMMEDIATELY",
          unlimitedEndDateTime: true,
          creativeRotationType: "EVEN",
          lineItemType: "PRICE_PRIORITY",
          costPerUnit: {
            currencyCode: "USD",
            microAmount: 0
          },
          costType: "CPM",
          creativePlaceholders: [
            {
              size: {
                width: size.width,
                height: size.height,
                isAspectRatio: false
              }
            }
          ],
          primaryGoal: {
            goalType: "NONE",
            unitType: "IMPRESSIONS"
          },
          targeting: [
            {
              inventoryTargeting: {
                targetedAdUnits: [
                  {
                    adUnitId: unit[0].id
                  }
                ]
              }
            }
          ]
        }
      ]
    };
    return this.LineItemsService.createLineItems(line);
  }
  async archiveLineItem(id) {
    await this.init();
    return this.LineItemsService.performLineItemAction({
      lineItemAction: {
        attributes: { "xsi:type": "ArchiveLineItems" }
      },
      filterStatement: { query: [`WHERE id = ${id}`] }
    });
  }

  async generate(orderId, sizes, price = 10000, amount) {
    await this.init();
    let LineItems = [];
    for (let i = 1; i <= amount; i++) {
      LineItems.push(
        Object.assign(
          {},
          {
            orderId: orderId,
            name: `lineItem_${Math.random()
              .toString(36)
              .substr(2, 9)}`,
            startDateTimeType: "IMMEDIATELY",
            unlimitedEndDateTime: true,
            creativeRotationType: "EVEN",
            lineItemType: "PRICE_PRIORITY",
            costPerUnit: {
              currencyCode: "USD",
              microAmount: price
            },
            costType: "CPM",
            creativePlaceholders: sizes,
            primaryGoal: {
              goalType: "NONE",
              unitType: "IMPRESSIONS"
            },
            targeting: [
              {
                inventoryTargeting: {
                  targetedAdUnits: [
                    { adUnitId: "21633352755", includeDescendants: true }
                  ]
                }
              }
            ]
          }
        )
      );
      price = price + 10000;
    }

    const lines = {
      lineItems: LineItems
    };
    return new Promise((resolve, reject) => {
      this.LineItemsService.createLineItems(lines)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          if (err) {
            reject(err);
          }
        });
    });
  }

  async UpdateLineItemsTargeting(target, lines) {
    // let arrayTarg = [];
    //  targetingData.forEach(target => {
    //      if (price/1000000 === parseFloat(target.name)){
    //        arrayTarg.push({
    //              attributes: {  'xsi:type': 'CustomCriteriaSet' },
    //              keyId:target.keyid,
    //              valueIds:[target.id],
    //              operator:'IS'
    //          })
    //      }
    //  });
    // return arrayTarg;
    /* console.log(lines);*/
    lines.forEach(line => {
      target.forEach(t => {
        if (line.costPerUnit.microAmount / 1000000 === parseFloat(t.name)) {
          line.targeting = {
            inventoryTargeting: line.targeting.inventoryTargeting,
            customTargeting: {
              attributes: { "xsi:type": "CustomCriteriaSet" },
              logicalOperator: "OR",
              children: [
                {
                  attributes: { "xsi:type": "CustomCriteria" },
                  keyId: t.keyid,
                  valueIds: [t.id],
                  operator: "IS"
                }
              ]
            }
          };
        }
      });
    });

    return new Promise(resolve => {
      this.LineItemsService.updateLineItems({ lineItems: lines }).then(data => {
        resolve(data);
      });
    });
  }
};
