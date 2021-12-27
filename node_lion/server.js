const http = require('http'); // http 모듈

http
  .createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end('<p>http 실행!</p>');

    // 이렇게 분기처리 하는 것을 라우팅!
    if (req.url === '/') {
      res.writeHead(200);
      res.end('main url');
    } else if (req.url === '/upload') {
      res.writeHead(200);
      res.end('upload url');
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  })
  .listen(3000, () => {
    console.log('port 3000');
  });
