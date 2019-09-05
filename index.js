require('dotenv').config()

const serverApi = require('./api/server');


const port = process.env.PORT || 7777
serverApi.listen(port, () => {
    console.log(`\nServer is running on port ${port}\n`)
});