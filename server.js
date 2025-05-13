var http = require("http");
var port = 3000;
var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, Docker!");
});
server.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
