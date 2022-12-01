const express = require("express");
const httpsService = express();
const serverIO = require("http").Server(httpsService);
const io = require("socket.io")(serverIO);

exports.Socket = class {
    constructor() {
        this.socket = io.on("connect", (socket) => {
            return socket;
        });
    }

    static start() {
        serverIO.listen(7777, () => {
            console.log(`Websocket server started at port 7777`);
        });
    }

    push(message, last, socketId, type='info') {
        this.socket.emit('console', {message, last, socketId, type});
    }

    sendProgress(percent, socketId) {
        this.socket.emit('progress', {percent, socketId});
    }

};
