const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify({status: 'ok', service: 'game-server'}));
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Multiplayer game server (demo)');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Game server listening on ${PORT}`));
