const { OAuth2Client } = require("google-auth-library");
const http = require("http");
const url = require("url");
const open = require("open");
const destroyer = require("server-destroy");
const keys = require("./oauth2.keys");
const fs = require("fs");
function getAuthenticatedClient() {
  return new Promise((resolve, reject) => {
    // create an oAuth client to authorize the API call.  Secrets are kept in a `keys.json` file,
    // which should be downloaded from the Google Developers Console.
    const oAuth2Client = new OAuth2Client(
      keys.web.client_id,
      keys.web.client_secret,
      keys.web.redirect_uris[0]
    );
    // Generate the url that will be used for the consent dialog.
    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: "https://www.googleapis.com/auth/dfp"
    });

    // Open an http server to accept the oauth callback. In this simple example, the
    // only request to our webserver is to /oauth2callback?code=<code>
    const server = http
      .createServer(async (req, res) => {
        try {
          if (req.url.indexOf("/oauth2callback") > -1) {
            // acquire the code from the querystring, and close the web server.
            const qs = new url.URL(req.url, "http://localhost:3000")
              .searchParams;
            const code = qs.get("code");
            // console.log(`Code is ${code}`);
            res.end("Authentication successful! Please return to the console.");
            server.destroy();
            // Now that we have the code, use that to acquire tokens.
            const r = await oAuth2Client.getToken(code);
            // Make sure to set the credentials on the OAuth2 client.
            oAuth2Client.setCredentials(r.tokens);
            // console.info('Tokens acquired.');

            resolve(oAuth2Client);
          }
        } catch (e) {
          reject(e);
        }
      })
      .listen(3000, () => {
        // open the browser to the authorize url to start the workflow
        open(authorizeUrl, { wait: false }).then(cp => cp.unref());
      });
    destroyer(server);
  });
}

(async () => {
  let data = await getAuthenticatedClient();
  fs.writeFile("token.json", JSON.stringify(data), err => console.log(err));
})();
