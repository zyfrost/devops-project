const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from Docker container!\n");
  res.write("Hi, This is my username: @zyfrost");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});