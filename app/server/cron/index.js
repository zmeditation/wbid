const { CronJob } = require("cron");
const { AdsTxt } = require("../../modules/AdsTxtGetter");

exports.Cron = class {
  constructor() {}
  static start() {
    return new CronJob(
      "10 8 * * *",
      () => {
        AdsTxt.get();
      },
      null,
      true
    );
  }
};
