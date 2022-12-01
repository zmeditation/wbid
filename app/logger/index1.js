const appRoot = require("app-root-path");
const winston = require("winston");
require("winston-daily-rotate-file");
const transport = new winston.transports.DailyRotateFile({
  filename: `${appRoot}/app/logs/%DATE%.log`,
  datePattern: "YYYY-MM-DD",
  zippedArchive: false,
  maxSize: "20m",
  maxFiles: "14d",
  level: "warn",
  handleExceptions: true
});
const logger = new winston.createLogger({
  level: "warn",
  transports: [transport],
  exitOnError: false // do not exit on handled exceptions
});

logger.stream = {
  write: function(message) {
    logger.info(message);
  }
};

module.exports = logger;
