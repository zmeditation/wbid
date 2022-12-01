const express = require("express");
const httpsService = express();
const { MiddleWares } = require("./middlewares");
exports.HTTP = class extends MiddleWares {
  constructor() {
    super();
  }
  static start() {
    MiddleWares.execute(httpsService);
    process.env.NODE_ENV !== "production"
      ? (this.port = process.env.PORT)
      : (this.port = 9999);
    if (this.port !== undefined) {
      httpsService.listen(this.port, '0.0.0.0', () => {
        console.log(`Server started at port ${this.port}`);
      });
    } else {
      console.log("NO PORT");
    }
  }
};
