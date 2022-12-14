const { BearerSecurity, Client, createClientAsync } = require("soap");

exports.GAM = class {
  constructor(options) {
    this.options = options;
  }

  async getService(service) {
    const { apiVersion } = this.options;
    const serviceUrl = `https://ads.google.com/apis/ads/publisher/${apiVersion}/${service}?wsdl`;
    const client = await createClientAsync(serviceUrl);
    client.addSoapHeader(this.getSoapHeaders());
    client.setToken = function setToken(token) {
      client.setSecurity(new BearerSecurity(token));
    };
    return new Proxy(client, {
      get: function get(target, propertyKey) {
        const method = propertyKey.toString();
        if (target.hasOwnProperty(method) && !["setToken"].includes(method)) {
          return async function run(dto) {
            const res = await client[method + "Async"](dto);
            const [status] = res;
            if (status) {
              return status["rval"];
            } else throw new Error();
          };
        } else {
          return target[method];
        }
      }
    });
  }

  static parse(res) {
    return res[0].rval;
  }

  getSoapHeaders() {
    const { apiVersion, networkCode } = this.options;

    return {
      RequestHeader: {
        attributes: {
          "soapenv:actor": "http://schemas.xmlsoap.org/soap/actor/next",
          "soapenv:mustUnderstand": 0,
          "xsi:type": "ns1:SoapRequestHeader",
          "xmlns:ns1":
            "https://www.google.com/apis/ads/publisher/" + apiVersion,
          "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
          "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/"
        },
        "ns1:networkCode": networkCode,
        "ns1:applicationName": "content-api"
      }
    };
  }
};
