// "dev": "next dev",
const express_app = require('express')();
const httpServer = require('http').Server(express_app);
const io = require('socket.io')(httpServer);
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const PORT = 3000;

io.on('connect', socket => {
    socket.emit('now', {
        message: 'zeit'
    })
})

nextApp.prepare()
    .then(() => {
        express_app.get('*', (req, res) => {
            return nextHandler(req, res);
        })

        httpServer.listen(PORT, error => {
            if (error) throw error
            console.log(`>Ready on http://localhost:${PORT}`)
        })
    })