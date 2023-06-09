// server/index.js

const express = require('express');
const axios = require('axios').default;

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// NBA json

app.get('/api/bs/nba', (req, res) => {
  let response;
  axios
    .get(
      'https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json'
    )
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    })
    .finally(() => {
      res.send(response);
    });
});

// MLB json

// GET from db

// POST to db

// PUT to db

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
