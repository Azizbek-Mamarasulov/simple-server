const https = require("https");

const express = require("express");
const { readFileSync } = require("fs");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/", (req, res) => {
  return res.json({
    message: "Server is working",
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const httpsServer = https.createServer(
  {
    key: readFileSync("./crt/server-key.pem", "utf-8"),
    cert: readFileSync("./crt/server-cert.pem", "utf-8"),
  },
  app
);

httpsServer.listen(4000, () =>
  console.log("Https server is running on port 4000")
);
