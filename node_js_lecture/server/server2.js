const http = require('http');
const fs = require('fs').promises;

// 서버 실행 !! 
const server = http.createServer(async (req, res) => {

    // SUCCESS
    try {
        // 한글 인식
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    
        // HTML 파일 읽어오기
        const data = await fs.readFile('./html/server2.html');
        res.end(data);
    } 
    // ERROR
    catch (error) {
        console.log(error);
        res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
        res.end(error.message);
    }


}).listen(8080);


// 서버 이벤트
server.on('listening', () => {
    console.log('Server Port 8080 Ready!!!');
});

// 에러 처리 
server.on('error', (error) => {
    console.error(error);
});


// 실행 > node server1