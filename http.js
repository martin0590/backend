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