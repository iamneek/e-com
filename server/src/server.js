const http = require("http")
const app= require("./config/app");

// loading or mounting 
const server = http.createServer(app)

// extra servers can be mounted on server/http



server.listen(3005, 'localhost', (err) => {
    if(!err){
        console.log("Server is listening to port 3005")
        console.log("Press CTRL+C To disconnect server")
    }
})