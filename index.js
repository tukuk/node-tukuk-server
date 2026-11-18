const express = require('express');
const cors = require('cors');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(compression());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'node-tukuk-server', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Node Tukuk Server running on port ${PORT}`);
});
