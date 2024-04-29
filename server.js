const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const port = process.env.PORT || 3002;
const server = http.createServer(app);
const io = socketIo(server);

const topicRoutes = require('./routers/router');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', topicRoutes);

io.on("connection", (socket) => {
  console.log("A client connected");

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });

  setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
    }, 1000);
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const dbConnection = require('./dbConnection');
dbConnection.connectToDatabase();
