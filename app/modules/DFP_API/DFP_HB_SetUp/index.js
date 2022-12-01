const {Network} = require("./modules/Network");
const {Company} = require("./modules/Company");
const {User} = require("./modules/User");
const {Order} = require("./modules/Order");
const {Inventory} = require("./modules/Inventory");
const {LineItem} = require("./modules/LineItem");
const {CustomTargeting} = require("./modules/CustomTargeting");
const {Creative} = require("./modules/Creative");
const {LineItemCreativeAssociation} = require("./modules/LineItemCreativeAssociationService");
const {ErrorHandler} = require("./handlers/error-handler");
const error = new ErrorHandler();
const network = new Network();
const company = new Company();
const user = new User();
const order = new Order();
const lineitem = new LineItem();
const inventory = new Inventory();
const customTargeting = new CustomTargeting();
const creative = new Creative();
const connect = new LineItemCreativeAssociation();

async function performLineItemsCreation(
    orderDataId,
    sizes,
    effectiveRootAdUnitId,
    currencyCode
) {
    await lineitem.createLineItems(
        orderDataId,
        sizes,
        10000,
        10000,
        299,
        effectiveRootAdUnitId,
        currencyCode
    );
    console.log("created first line item bucket");
    await lineitem.createLineItems(
        orderDataId,
        sizes,
        3000000,
        20000,
        100,
        effectiveRootAdUnitId,
        currencyCode
    );
    console.log("created second line item bucket");
    await lineitem.createLineItems(
        orderDataId,
        sizes,
        5000000,
        100000,
        21,
        effectiveRootAdUnitId,
        currencyCode
    );
    return new Promise(resolve => {
        resolve();
    });
}

(async () => {
    try {
        console.log("start child process");
        process.send({type: 'info', text: 'Integration started', status: 'success'});
        process.send({type: 'progress', status: 'success', value: 2});
        // Initialise predefined constants
        const companyName = `WMG International Bidder`;
        const orderName = `WMG_ORDER`;
        const targetingName = `hb_pb`;
        // Initialise predefined constants
        // Get networkCode and runOfNetwork ad unit id
        const {networkCode, effectiveRootAdUnitId, currencyCode} = await network.getNetwork();
        // Get networkCode and runOfNetwork ad unit id
        console.log("get network and ad unit");
        process.send({type: 'info', text: 'Get Network and Ad Unit', status: 'success'});
        process.send({type: 'progress', status: 'success', value: 3});
        // Check if network code related to network code from user input inside network.json
        const isNetworkValid = await network.checkNetworkValidity(networkCode);
        // Check if network code related to network code from user input inside network.json
        if (!isNetworkValid) {
            process.send({type: 'info', status: 'error', text: 'Incorrect network ID'});
            process.exit(1);
        } else {
            console.log("Network code is true"); // Exit if not (need to send something to user)
        }
        // Check if GAM has Name of Company if not - create company
        let {companyData} = await company.checkIfCompanyExist(companyName);
        if (companyData === null) {
            companyData = await company.createCompany(companyName);
            console.log("Company created", companyData[0].id);
        }
        // Check if GAM has Name of Company if not - create company

        let companyCreatedData = await company.getCompany(companyData[0].id);
        process.send({type: 'info', text: 'Get Company Data', status: 'success'});
        process.send({type: 'progress', status: 'success', value: 4});
        console.log("get Company data", companyCreatedData.id);
        let userData = await user.getUser();
        process.send({type: 'info', text: 'Get User Data', status: 'success'});
        process.send({type: 'progress', status: 'success', value: 5});
        console.log("get user data", userData[0].id);

        // Check if GAM has order with provided name. if not - create order
        let {orderData} = await order.checkIfOrderExist(orderName);
        if (orderData === null) {
            orderData = await order.createOrder(
                orderName,
                companyCreatedData.id,
                userData[0].id
            );
        }
        process.send({type: 'info', text: 'Get Order Data', status: 'success'});
        process.send({type: 'progress', status: 'success', value: 7});
        console.log("get order data", orderData[0].id);
        // Check if GAM has order with provided name. if not - create order
/*        if (orderData[0].status !== "APPROVED") {
            await order.activateOrder(orderData[0].id);
            console.log("activate Order");
        }*/

        const sizes = await inventory.getSizes();
        process.send({type: 'info', text: 'Get Sizes', status: 'success'});
        process.send({type: 'progress', status: 'success', value: 11});
        console.log("get Sizes");

        // Get line Items and check if all bucket gas been created
        const lineItemData = await lineitem.checkIfLineItemsExist(orderData[0].id);

        if (lineItemData.size !== 0) {
            await lineitem.parseLineItems();
        } else {
            await performLineItemsCreation(
                orderData[0].id,
                sizes,
                effectiveRootAdUnitId,
                currencyCode
            );
        }
        console.log("create line items");
        process.send({type: 'info', text: 'Create And Update Line Items', status: 'success'});
        // Get line Items and check if all bucket gas been created
        process.send({type: 'progress', status: 'success', value: 14});
        // Check if GAM has custom targeting
        let {
            targetBucket,
            customTargetingDataKey
        } = await customTargeting.findExistingCustomTargetingKey(targetingName);
        if (customTargetingDataKey === null) {
            const customTargetingDataKey = await customTargeting.createCustomTargetKey(
                targetingName
            );
            console.log(
                "create create custom targeting key data",
                customTargetingDataKey[0].id
            );
            process.send({type: 'info', text: 'Create Custom Targeting', status: 'success'});
            await customTargeting.createCustomTargetValue(
                customTargetingDataKey[0].id
            );
            console.log("create custom targeting values");
            targetBucket = await customTargeting.getCustomTargeting(
                customTargetingDataKey[0].id
            );
        } else {
            console.log('custom targeting:', customTargetingDataKey[0].id);
        }

        // Check if GAM has custom targeting
        console.log("get custom targeting");
        let lineItemBucket = await lineitem.getLineItems(orderData[0].id);
        // process.send({type: 'info', text: 'Get Line Items', status: 'success'});
        console.log("get line Items");
        await lineitem.updateLineItemTargeting(lineItemBucket, targetBucket);
        // process.send({type: 'info', text: 'Update Line Items', status: 'success'});
        console.log("update line items");
        const creativeStatus = await creative.checkIfCreativesExist(
            companyData[0].id
        );
        if (creativeStatus === true) {
            await creative.createCreatives(sizes, companyData[0].id);
        }
        process.send({type: 'info', text: 'Create Creatives', status: 'success'});
        console.log("create creatives");
        const creativesData = await creative.getCreatives(companyData[0].id);
        console.log("get creatives");

        process.send({type: 'progress', status: 'success', value: 16});
        process.send({type: 'info', text: 'Create Connections', status: 'success'});
        await connect.connectLineItemAndCreative(
            creativesData,
            lineItemBucket,
            sizes
        );
        if (orderData[0].status && orderData[0].status !== "APPROVED") {
            await order.activateOrder(orderData[0].id);
            console.log("activate Order");
        }
        console.log('Integration finished!');
        process.send({type: 'info', text: 'Integration finished', status: 'success', last: false});
        process.exit(0);

    } catch (e) {
        await error.handle(e);
    }
})();

// network.createTestNetwork().then(data => console.log(data));
