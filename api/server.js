const express = require('express');

const server = express();


server.get('/', (req, res) => {
    res.status(200).json({
        greeting: 'Hello there.',
        reply: 'General Kenobi...'
    })
})




module.exports = server