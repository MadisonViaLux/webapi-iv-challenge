const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.status(200).json({
        greeting: process.env.GREETING,
        reply: process.env.REPLY
    })
})

module.exports = server