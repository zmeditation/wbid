const { Server } = require("./app/server/run");
const { Socket } = require("./app/server/socket/index");
const { HTTP } = require("./app/server/http");
const { Cron } = require("./app/server/cron");
const { CronAdsTxtChecker } = require("./app/server/cron/trialUsersCheck")
Server.run(HTTP, Socket, Cron, CronAdsTxtChecker);
