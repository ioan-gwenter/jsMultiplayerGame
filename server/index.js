const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const io = new Server(server, { cors: { origin: "*" }});


const app = express();
const server = http.createServer(app);