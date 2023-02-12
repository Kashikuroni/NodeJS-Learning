const http = require("http");
// request, response
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return; // В уроке не блыо ретерна но без него сервер падает при обновлении страницы
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
    return; // В уроке не блыо ретерна но без него сервер падает при обновлении страницы
  }
  res.end(`
    <h1>Oops!</h1>
    <p> We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
  `);
});

server.listen(4000);
