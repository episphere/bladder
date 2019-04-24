console.log('server started at '+Date())

const http = require('http');

//const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  let x={hello:'world'}
  res.end(JSON.stringify(x,null,3));
});

server.listen(port);
