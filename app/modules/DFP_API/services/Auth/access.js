const { BearerSecurity, Client, createClientAsync } = require("soap");
const fs = require("fs");
const path = require("path");
exports.AccessOverOAuth2 = class {
  constructor() {}
  getSoapHeaders() {
    // const { apiVersion, networkCode } = this.options;
    return new Promise((resolve, reject) => {
      let data = fs.readFileSync(
        path.resolve(__dirname, "network.json"),
        "utf-8"
      );
      const net = JSON.parse(data);
      const headers = {
        RequestHeader: {
          attributes: {
            "soapenv:actor": "http://schemas.xmlsoap.org/soap/actor/next",
            "soapenv:mustUnderstand": 0,
            "xsi:type": "ns1:SoapRequestHeader",
            "xmlns:ns1": "https://www.google.com/apis/ads/publisher/v202105",
            "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
            "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/"
          },
          "ns1:networkCode": net.network,
          "ns1:applicationName": "content-api"
        }
      };
      resolve(headers);
    });
  }
  getToken() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.resolve(__dirname, "token.json"),
        "utf-8",
        (err, data) => {
          if (err) reject(err);
          resolve(JSON.parse(data));
        }
      );
    });
  }

  async getService(service) {
    try {
      const url = `https://ads.google.com/apis/ads/publisher/v202105/${service}?wsdl`;
      const client = await createClientAsync(url);
      client.addSoapHeader(await this.getSoapHeaders());
      const token = await this.getToken();
      client.setToken = function setToken(token) {
        client.setSecurity(new BearerSecurity(token));
      };
      client.setToken(token.credentials.access_token);
      return client;
    } catch (e) {
      throw new Error(e);
    }
  }
};
