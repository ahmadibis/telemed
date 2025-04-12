const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.send('Auth Service is healthy 🚀');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Auth service running on port ${port}`));
