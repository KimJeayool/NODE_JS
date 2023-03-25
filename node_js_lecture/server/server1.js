const http = require('http');

// 서버 실행 !! 
const server = http.createServer((req, res) => {
    // 한글 인식
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});

    // 본문 내용
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


// 실행 > node server1