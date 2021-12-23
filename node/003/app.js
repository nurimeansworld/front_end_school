var http = require('http');
var fs = require('fs');

// var app = http.createServer();
// var app = http.createServer(function (request, response) {});
var app = http.createServer(function (request, response) {
  var url = request.url;
  console.log(`request : ${request}`);
  console.log(`request : ${request.url}`);

  if (request.url == '/') {
    url = 'index.html';
  } else if (request.url == '/blog') {
    url = 'blog.html';
  } else if (request.url == '/favicon.ico') {
    return response.writeHead(404);
  } else {
    response.writeHead(404);
    response.end('Not found');
  }

  response.writeHead(200);
  console.log(__dirname + url);
  // response.end(fs.readFileSync(__dirname + url));
  response.end(fs.readFileSync(__dirname + '/' + url));
  response.end('helloworld!!' + url);

  // app.listen(3000);
  // localhost:5500
  app.listen(5500);
});
