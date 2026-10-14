const express = require('express');

const app = express();
app.get('/', (_request, response) => response.type('html').send(
  '<!doctype html><html><head><title>Dockerfile Express fixture</title></head><body><h1>Dockerfile Express fixture</h1></body></html>',
));
app.get('/healthz', (_request, response) => response.status(200).send('ok'));
app.get('/api/status', (_request, response) => response.json({ ok: true, framework: 'express' }));
const port = Number(process.env.PORT);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer from 1 to 65535');
}
app.listen(port, '0.0.0.0');
