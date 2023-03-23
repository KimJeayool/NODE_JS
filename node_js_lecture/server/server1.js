const http = require('http');

// 서버 실행 !! 
const server = http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server</p>');
    res.end('<p>Hello ChestNut</p>');

}).listen(8080);
    // 프로세스 설정
    // 포트번호 8080
    // .listen(8080, () => {
    //     console.log('Server Port 8080 Ready!!!');
    // });

// 서버 이벤트
server.on('listening', () => {
    console.log('Server Port 8080 Ready!!!');
});

// 에러 처리 
server.on('error', (error) => {
    console.error(error);
});


