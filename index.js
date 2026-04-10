const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (_req, res) => res.json({ status: 'ok', service: 'ice-test-hello-api' }));
app.get('/health', (_req, res) => res.sendStatus(200));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
