const http = require('http');
const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.write('Hi there, Node Js here on your domain');
        res.end();
    } else {
        res.write('Serving on a different domain');
        res.end();
    }
});
server.listen(3000);