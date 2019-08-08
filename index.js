

const serverApi = require('./api/server');



const port = 7777;
serverApi.listen(port, () => {
    console.log(`\nServer is running on port ${port}\n`)
});