const http = require('node:http')

const server = http.createServer((req, res) => {
    // res.end(req.url) // gives me the URL i am at

    if(req.url === "/"){
        res.writeHead(200, { "content-type": "text/plain" })
        res.end("home page")
    }else if(req.url === "/about"){
        res.writeHead(200, { "content-type": "text/play" })
        res.end("about page")
    }else if(req.url === '/api'){
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            firstName: "Bruce",
            lastName: "wayne"
        }))
    }else{
        res.writeHead(404)
        res.end("page not found")
    }
})


server.listen(3000, () => {
    console.log("server runnin on port 3000")
})