const {UserDB} = require("../../../../../database/controllers/user");
const {Socket} = require("../../../../socket");
const io = new Socket();

module.exports.ForkProcess = async process => {
    const {id, socket} = JSON.parse(
        fs.readFileSync("app/modules/DFP_API/services/Auth/user-data.json", "utf-8")
            .toString()
    );

    await UserDB.update(id, undefined, undefined, null);

    process.on("message", message => {
        if (message.status === "success" && message.type !== "progress") {
            io.push(message.text, false, socket, "info");
        } else if (message.status === "error") {
            io.push(`Error: ${message.text}`, false, socket, "error");
            process.kill();
        } else if (
            message.status === "success" &&
            message.type !== "progress" &&
            message.last === true
        ) {
            io.push(message.text, false, socket, "success");
        } else if (message.status === "success" && message.type === "progress") {
            io.sendProgress(message.value, socket);
        }
    });

    process.on("close", async (code) => {
        console.log("Child process closed with code", code);
        if (code === 0) {
            await UserDB.update(id, undefined, undefined, true, undefined, ['trial'], +new Date());
            console.log("User HB Setup status updated:", true);
            io.push("Integration completed successfully", true, socket, "success");
        } else {
            await UserDB.update(id, undefined, undefined, false);
            console.error("Error occurred during integration. See logs");
        }
    });
};
