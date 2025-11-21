const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001", // Remplacez par l'URL de votre client
    methods: ["GET", "POST"]
  }
});

const port = 3000
server.listen(port, () => console.log(`http://localhost:${port}`))


io.on('connection', (socket) => {
  console.log(`Un utilisateur s'est connecté : ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`L'utilisateur s'est déconnecté : ${socket.id}`);
  });
});