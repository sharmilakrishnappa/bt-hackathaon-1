const express = require('express');
const axios = require('axios');
const fs = require('fs');
const https = require('https');
const path = require('path');

const app = express();
const port = 5000;

const pfx = fs.readFileSync(path.resolve(__dirname, 'nerCert.pfx'));
const httpsAgent = new https.Agent({
  pfx: pfx,
  passphrase: 'DigitalIVR' // If your .pfx file is encrypted, provide the passphrase here
});

app.use(express.json());

// Disable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  if (req.method === 'OPTIONS') {
    res.sendStatus(204); // Handle preflight requests
  } else {
    next();
  }
});

app.post('/api/converse', async (req, res) => {
  const data = req.body;
  console.log(data)
  try {
    const response = await axios.post('https://api2-test2.home.bt.com/v1/text-service/converse-dialogues', data, {
      headers: {
        'APIGW-Tracking-Header': 'DIVR',
        'Content-Type': 'application/json'
      },
      httpsAgent: httpsAgent
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


app.post('/api/converse2', async (req, res) => {
  const data = req.body;
  console.log(data)
  try {
    const response = await axios.post('https://api2-test2.home.bt.com/v1/text-service/converse-dialogues', data, {
      headers: {
        'APIGW-Tracking-Header': 'DIVR',
        'Content-Type': 'application/json'
      },
      httpsAgent: httpsAgent
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});