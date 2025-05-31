// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// IP Endpoint
app.get('/api/ip', (req, res) => {
  const ip =
    (req.headers['x-forwarded-for'] || '').split(',').pop().trim() ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    req.connection?.socket?.remoteAddress;

  res.status(200).json({ ip: ip });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
