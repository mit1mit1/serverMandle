var express = require("express");
const cors = require("cors");
var app = express();
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PATCH",
    exposedHeaders: "access-control-allow-origin"
  })
);

const playerPositions = [
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  },
];

app.get("/getPosition/:id", function (req, res) {
  if (req.params.id < playerPositions.length && req.params.id >= 0) {
    res.end(JSON.stringify(playerPositions[req.params.id]));
  } else {
    res.end(JSON.stringify(playerPositions[0]));
  }
  console.log("GOTTEN");
});

app.patch("/setPosition/:id/:x/:y", function (req, res) {
  if (req.params.id < playerPositions.length && req.params.id >= 0) {
    playerPositions[req.params.id].x = req.params.x;
    playerPositions[req.params.id].y = req.params.y;
  } else {
    playerPositions[0].x = req.params.x;
    playerPositions[0].y = req.params.y;
  }
  console.log("PATCHED");
  res.end();
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
