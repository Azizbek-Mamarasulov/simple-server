const https = require("https");

const express = require("express");
const { readFileSync } = require("fs");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.json({
    message: "Server is working",
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const httpsServer = https.createServer(
  {
    key: readFileSync("./crt/server-key.pem"),
    cer: readFileSync("./crt/server-cert.pem"),
  },
  app
);

httpsServer.listen(4000, () =>
  console.log("Https server is running on port 4000")
);
