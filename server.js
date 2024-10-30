const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) {
      res.setHeader("Content-Type", "text/plain");
      res.end("Error reading file");
      return;
    }

    res.setHeader("Content-Type", "text/plain");
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
