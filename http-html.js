const http = require('node:http')
const fs = require('node:fs')


// html via the response
const serverOne = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" }) // specify content type
    res.end("<h1>hello world</h1>") // end the response sending the html
})


// html via index.html file
// this works but readFileSync reads the entire file contents at once, if i have a big html file
// im storing all that content in a temporary buffer which may lead to unnecessary use of memory.

const serverTwo = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" }) // specify content type
    const html = fs.readFileSync("./index.html", 'utf-8') // is sync because i want to read the before responding
    res.end(html) // end the response sending the html
})

// i can use streams

const serverThree = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" }) // specify content type
    fs.createReadStream("./index.html").pipe(res)
})

server.listen(3000, () => {
    console.log("server runnin on port 3000")
})