// Computer connected to the internet are called client and servers
// clients are internet-connected devices such as computers or mobile phones along with web accessingsoftware available on those devices such as a web browser.
// servers are computers that store web pages, sites or applications.

// when i type a url in the browser the client device request acces to a web page, a copy of the web page is downloaded from the server and sent as a response to the
// client to be desplayed in the web browser.

// WHAT if the request cannot be understood by the server and the response cannot be understood by the client ?

// we use HTTP (Hypertext Transfer Protocol)
// A protocol that defines a format for clients and servers to speak to each other.
// The client sends an HTTP reqaauest and the server responds with an http.


// I can create a web server using node.js
// nodejs has access top operating system functionality like networking
// node has an event loop to run tasks asynchronously and is perfect for creating web servers that can simultaneouly handle large volumes of requests
// the node server we create should still respect the http format
// the http module allows creation of web servers that can transfer data over http.

const http = require('node:http')
// http module also extend the event emitter class
// anmd the callback function is actually a request listener, whenever a request reaches the server this callback function is executed.
// a request argument contains information about the incoming request.
// the server response argument we use it to build the response that has to be sent back to the client.
// node will handle the incoming request and we have to write code to send back the response

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" }) // all OK
    res.end("hello world") // end the response
})

//we now have to inform the server to listen to any incoming request
// we store the http in a const

server.listen(3000, () => {
    console.log("server runnin on port 3000")
})