const { GAM } = require("../services/gam");
const Dfp = require("node-google-dfp");
const { auth } = require("google-auth-library");
const { LineItem } = require("./LineItem");
const keys = {
  type: "service_account",
  project_id: "wmgoauth",
  private_key_id: "d734f46255700029ff569eb1203ecf9ff8cf9707",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQChO3//4HAb/JDS\nUdVYq4UNKCQloK9cs+xY8DkLTTMsC2ZzCVDxOUsaN1w7UXX7Z+urZ+u7tLL9lXFh\ne9LmFmaF3hFnexJf16T+JAfcltnRbi2FTHkN0U/4E32X22c9OuNKIhEq9uc8SChC\nPXf55mZzP+F8LXFXEDCmyzb0Pc5/ayNutIFEBl1ze6ztXwQE3wmgcl9zdztr8qg7\n5p1g1r9R19ykISZYRXlIUGk1v6yNKbY7AnZF3qMY6xBa07IHK8yu4DQnhWZuOeSJ\nysb1BHoaoH+Awr0em7+NMlKJJErzk2EkQnzmrmAJbzAWy3hb0AVsFQ9CMN0mqS+5\n6QtOj9itAgMBAAECggEAJaCz9OStbU6igr8P5hdzX/huBS0Mt/sSjcgUXAeaiW0o\nrfCu5/kJxrbESuCuQuvEE5bXbFFV03oQwaIq/EEekJ/cmnSdu2nhiuEgR5IaB/cp\nXvpTpw6iFeCAl1PgMmk/mbG9JXSFTyt838amLRdg8gUmy7r0QFAaNpbm/pW9Dz20\nBMrMkjRdOlE14oVEKMWgXIQuIi1nk0G7fcmWG2ELPO2WJXcphUiEngk0jnYLQJsQ\n9CiFcpicgoTh/AeKXnL8q/Oxzkds+v90IDl1uIXN090LsYjKkPgOhr0Q5ECD/JUJ\nepLdE7gBDWE0m5JTS4SzM2zqduBPpeGYgU3+CijICQKBgQDXQbAlTia0u9ZmlrQE\nunH3VheRkBkgwXC7e6I4pfjjat9YKnRGwIJVvcmpv5t8ess8EvvPl0JJvE8BTiyu\nPZHdnc3QRAADX3rZDAE/Yxfpv8KjjzhMzbyXwQf/xhPquRx0Xi5axY7YpuDxaoYp\nl8yuyfI/fyHobixRFrAi+Rv6lQKBgQC/wA6khuhTf4dx1g1qnvwTo78KQVufbFNj\nwIeME6uoAdrE33xo0GxTbDvlIZjiVbmROtO8ulnujCjCts/1Ay1t4rbyi5KfRvYP\nU1SXkUM0jLa99e0jwdZHxBIxkM5iHBftvQ4xbSP8JCg4TtVQNS5uKQ2RqgOcjAt/\nkIWmDcr3uQKBgQCwifIiFl9OOQOU7aJEgnj3hgccXdcN8zg2uyYHWa+vLDZyg5cL\nc9Uw5s9exYOK6taFtXgKAB7ghG0zP98LI/nejQ5/8VUlbwg8vEjFqMqy7Y9/PvXI\nn689spWR4uzww9KfaaKQ1Zfa/bpcpKXVtOasr3lbNDQmAT2dX4Mjm7SjpQKBgQCc\nP4jvAktwNrwMw8q89f4cltLGLYnWd7Pf1fPd7e1zgsdco2vCEQwkUk7gICdvT0Fe\nGVyOLh+4JZfVSphcY5FyOEqxi5AXoABDbrjApQrpWDxUwH/TIlFUu23D2+aAxbmt\n7N8S4YdwH5pyf7KMoDlMZMF8z9gPiYKZGQ/+xsB8aQKBgGaijkKE+e1nsRsFXx0s\nfZHP8PSSY6+R7ArxGGRiyqkNljaNpg4oBG7Dc7vkMBDo2qv9WPVMbvYRG57tRFwY\nJAjJiZ+iPNUJ3mGdJDFfVkwwMrAM/s1aNNvJBAghRg0fnkysA+6TxqU1zftpbBb6\n5wTi0WIeyiWMefgYwlpLhW+3\n-----END PRIVATE KEY-----\n",
  client_email: "wmgoath@wmgoauth.iam.gserviceaccount.com",
  client_id: "108471929897834505609",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/wmgoath%40wmgoauth.iam.gserviceaccount.com"
};
const services = ["OrderService"];

class Order extends GAM {
  constructor() {
    super();
  }

  async createOrder() {
    // let DataObject = {};
    const client = auth.fromJSON(keys);
    client.scopes = ["https://www.googleapis.com/auth/dfp"];
    await client.authorize();
    const gam = new GAM({ networkCode: "112081842", apiVersion: "v202105" });

    const OrderService = await gam.getService("OrderService");
    OrderService.setToken(client.credentials.access_token);

    const LineItemsService = await gam.getService("LineItemService");
    LineItemsService.setToken(client.credentials.access_token);

    const CreativeService = await gam.getService("CreativeService");
    CreativeService.setToken(client.credentials.access_token);

    const LineItemCreativeAssociationService = await gam.getService(
      "LineItemCreativeAssociationService"
    );
    LineItemCreativeAssociationService.setToken(
      client.credentials.access_token
    );

    const CustomTargetingService = await gam.getService(
      "CustomTargetingService"
    );
    CustomTargetingService.setToken(client.credentials.access_token);
    let query = new Dfp.Statement("WHERE customTargetingKeyId=10763479");
    CustomTargetingService.getCustomTargetingValuesByStatement(query).then(
      data => {
        console.log(data);
      }
    );

    const orderData = {
      orders: [
        {
          name: "NodeJS #5",
          notes: "It cannot be this simple!",
          advertiserId: "49711802",
          traffickerId: "244738898"
        }
      ]
    };
    //2500102462
    //         OrderService.createOrders(orderData)
    //             .then(order => {
    //                 console.log(order);
    // order[0].id
    //     const lineItems = generateLineItems('2500102462', 3);
    //     LineItemsService.createLineItems(lineItems)
    // })
    // .catch(err=>{
    //     console.log(err)
    // })

    // console.log(order);
    // let order = {id: 2498638270};
    //
    // let  lineItem = {
    //     'lineItems':[
    //         {
    //             orderId:DataObject.orderId,
    //             name:'lineItem1',
    //             // startDateTime: Dfp.DfpDate.from(new Date(), 'America/Toronto'),
    //             startDateTimeType:'IMMEDIATELY',
    //             // endDateTime: Dfp.DfpDate.from(new Date(), 'America/Toronto', 0, 1),
    //             unlimitedEndDateTime:true,
    //             creativeRotationType:'EVEN',
    //             lineItemType:'PRICE_PRIORITY',
    //             costPerUnit:{
    //                 currencyCode:'USD',
    //                 microAmount:'1000000'
    //             },
    //             costType:'CPM',
    //             creativePlaceholders:{ size: {
    //                     width: 728,
    //                     height: 90,
    //                     isAspectRatio: false
    //                 }},
    //
    //             primaryGoal:{
    //                 goalType:'NONE',
    //                 unitType:'IMPRESSIONS'
    //             },
    //             targeting: { inventoryTargeting: { targetedPlacementIds: '28846285'} }
    //
    //         },
    //         {
    //             orderId:DataObject.orderId,
    //             name:'lineItem1',
    //             // startDateTime: Dfp.DfpDate.from(new Date(), 'America/Toronto'),
    //             startDateTimeType:'IMMEDIATELY',
    //             // endDateTime: Dfp.DfpDate.from(new Date(), 'America/Toronto', 0, 1),
    //             unlimitedEndDateTime:true,
    //             creativeRotationType:'EVEN',
    //             lineItemType:'PRICE_PRIORITY',
    //             costPerUnit:{
    //                 currencyCode:'USD',
    //                 microAmount:'1000000'
    //             },
    //             costType:'CPM',
    //             creativePlaceholders:{ size: {
    //                     width: 728,
    //                     height: 90,
    //                     isAspectRatio: false
    //                 }},
    //
    //             primaryGoal:{
    //                 goalType:'NONE',
    //                 unitType:'IMPRESSIONS'
    //             },
    //             targeting: { inventoryTargeting: { targetedPlacementIds: '28846285'} }
    //
    //         }
    //     ]
    // };

    // const lineItemData = line;

    // LineItemsService.createLineItems(lineItem).then(data=>{
    //     console.log(data)
    // })
    //     .catch(err =>{
    //         console.log(err)
    //     });
    // let lineItemId = {id:'4973068456'};

    // let code = `<script>
    //                 let w = window;
    //                 for (i = 0; i < 10; i++) {
    //                   w = w.parent;
    //                   if (w.pbjs) {
    //                     try {
    //                       w.pbjs.renderAd(document, '%%PATTERN:hb_adid%%');
    //                       break;
    //                     } catch (e) {
    //                       continue;
    //                     }
    //                   }
    //                 }
    //         </script>`
    //
    // let creative = {
    //         creatives: [{
    //             attributes: { 'xsi:type': 'ThirdPartyCreative' },
    //             advertiserId: '49711802',
    //             name: 'creative1',
    //             size: {
    //                 width: 728,
    //                 height: 90,
    //                 isAspectRatio: false
    //             },
    //             snippet:code
    //
    //     }]
    // };
    // CreativeService.createCreatives(creative)
    //     .then(data=>{
    //             console.log(data)
    //         })
    //     .catch(err=>{
    //             console.log(err)
    // });
    // let creativeid = {id: '138262295695'};
    //
    // const locate = {
    //     lineItemCreativeAssociations: [{
    //         lineItemId: lineItemId.id,
    //         creativeId: creativeid.id
    //     }]
    // };
    // LineItemCreativeAssociationService.createLineItemCreativeAssociations(locate)
    //     .then(data=>{
    //         console.log(data)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     });
    //
    // const approveAndOverbook = {
    //
    //         orderAction: {
    //             attributes: { 'xsi:type': 'ApproveAndOverbookOrders' },
    //             skipInventoryCheck: true
    //         },
    //         filterStatement: { query: 'WHERE id = ' + order.id }
    //     };
    //
    //
    // OrderService.performOrderAction(approveAndOverbook)
    //     .then(data=>{
    //     console.log(data)
    // })
    //     .catch(err=>{
    //     console.log(err)
    // })

    // console.log(lineItem);
  }
}
// function generateLineItems(orderID, amount) {
//     let lineItem = [];
//     let price = 10000;
//     for (let i=0; i<amount; i++){
//         lineItem.push(new LineItem(orderID, price).returnObject());
//         price = price+10000;
//     }
//     return {lineItems:lineItem};
// }
// generateLineItems('2498638270', 3);

const serv = new Order();

serv.createOrder();
