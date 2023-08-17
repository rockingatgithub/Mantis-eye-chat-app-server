const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});


// room1, room2, room3

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('message', data => {
        console.log("Message from frontend", data)
        io.emit('message_back' + 'room1', data)
    })

  });

server.listen(8000, () => {
  console.log('listening on *:8000');
});