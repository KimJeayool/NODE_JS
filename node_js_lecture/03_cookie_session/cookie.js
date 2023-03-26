const http = require('http');

http.createServer((req, res) => {
    // URL & Cookie Data
    console.log(req.url, req.headers.cookie);

    // Set Cookie Data
    res.writeHead(200, {'Set-Cookie': 'mycookie=test'});
    res.end('Hello Cookie');
})
    .listen(8083, ()=>{
        console.log('8083 Port Server Start Ready!!!');
    });