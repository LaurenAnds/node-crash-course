const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //header
  res.setHeader("Content-type", "text/html");

  fs.readFile("./node-crash-course/views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});

// function randomDieRoll(){
//     return 1 + Math.floor((Math.random() * 6))
// }
