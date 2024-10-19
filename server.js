const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let notepadContent = ''; // Stores the content of the notepad

io.on('connection', (socket) => {
    // Send the current content to the new user
    socket.emit('update', notepadContent);

    // Listen for updates from users
    socket.on('update', (data) => {
        notepadContent = data;
        socket.broadcast.emit('update', data); // Send updates to all other users
    });
});

app.use(express.static(__dirname + '/public'));

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
