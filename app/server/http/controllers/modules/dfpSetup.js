const fs = require("fs");
const { Controller } = require("../../../../controllers");
const controller = new Controller();
const { ForkProcess } = require("./Threads/forkProcess");

module.exports = async (req, res) => {
  let { token, networkId, id, socket } = req.body;
  token = JSON.parse(token);
  const expiryDate = new Date(token.credentials.expiry_date);
  if (expiryDate > new Date()) {
    fs.writeFileSync(
      "app/modules/DFP_API/services/Auth/token.json",
      JSON.stringify(token)
    );
    fs.writeFileSync(
      "app/modules/DFP_API/services/Auth/user-data.json",
      JSON.stringify({ id, socket })
    );
    fs.writeFile(
      "app/modules/DFP_API/services/Auth/network.json",
      JSON.stringify({ network: networkId }),
      async err => {
        if (err) res.status(500).send("Internal Server Error");
        const process = await controller.FirstHBSetup();
        await ForkProcess(process);
      }
    );
    res.status(200).send("Token is valid");
  } else {
    console.log("Token is invalid", expiryDate.toISOString());
    res.status(500).send("Token is invalid");
  }
};
