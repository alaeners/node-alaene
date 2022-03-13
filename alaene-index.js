const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Alaene Rufino de Sousa');
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});