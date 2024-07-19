// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// const externalRoute = require('./routes/externalRoute');

// app.use(bodyParser.json());
// app.use('/', externalRoute);

// const port = 9000;

// app.use(express.json());

// app.listen(port, () => {
//     console.log("Server listening on port ",port);
// })

// const axios = require('axios');
// let data = JSON.stringify({
//   "dialogueId": "be037700-c184-4657-bfdf-ba72e511f8af",
//   "sessionId": "a6c990db4af0f644e084afe9601da8f4"
// });

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'https://api2-test2.home.bt.com/v1/text-service/converse-dialogues',
//   headers: {
//     'APIGW-Tracking-Header': 'DIVR',
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

const express = require("express");
const axios = require("axios");
const fs = require("fs");
const https = require("https");
const path = require("path");

const app = express();
const port = 3000;

const pfx = fs.readFileSync(path.resolve(__dirname, "cert.pfx"));
const httpsAgent = new https.Agent({
  pfx: pfx,
  passphrase: "DigitalIVR", // If .pfx file is encrypted, provide the passphrase here
});

app.use(express.json());

app.get("/api/converse", async (req, res) => {
  const body = {
    dialogueId: "be037700-c184-4657-bfdf-ba72e511f8af",
    sessionId: "cb72281842636d45d509dca52f58f94e",
  };
  fetch(
    "https://api-test2.ee.co.uk/common/geographicAddressManagement/v1/geographicAddress?postcode=SA5+2AG&addressSource=Openreach&isTechonologyMarkersRequired=true",
    {
      method: "GET",
      headers: {
        "APIGW-Client-Id": "n5xdFTEN6BpTcF96PcsSGEJ2UGo1bLpH",
        "APIGW-Tracking-Header": "dbcdbcjd",
      },
    }
  )
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// Disable CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  ); // Allow specific HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow specific headers
  if (req.method === "OPTIONS") {
    res.sendStatus(204); // Handle preflight requests
  } else {
    next();
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
