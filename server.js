
const http = require('http');
const axios = require('axios');

//const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  axios.get('http://firebrowse.org/api/v1/Samples/mRNASeq?format=json&gene=PSCA&cohort=BLCA&protocol=RSEM&page=1&page_size=250&sort_by=cohort')
    .then(function (x) {
      res.end(JSON.stringify(x.data,null,3));
      //console.log(response);
    })
    .catch(function (err) {
      res.end(JSON.stringify(err,null,3))
      //console.log(error);
    });
  //let x={hello:'world'}
  
});

server.listen(port);
console.log(`server listening to port ${port} since ${Date()}`)
