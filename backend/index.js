const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/date', (req, res) => {
  const today = new Date();
  const month = today.getMonth() + 1; // getMonth() returns 0-11
  const day = today.getDate();

  res.json({ month, day });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
