const http = require('node:http')

const server = http.createServer((req, res) => {

    const superHero = {
        firstName: "Bruce",
        LastName: "Wayne"
    }

    //cant send javascript object as is in a response. i have to convert it to JSON.
    // this is basically an API
    res.writeHead(200, { "content-type": "application/json" }) // specify content-type
    res.end(JSON.stringify(superHero)) // stringify the response
})


server.listen(3000, () => {
    console.log("server runnin on port 3000")
})