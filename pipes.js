const fs = require('node:fs')
const zlib = require('zlib') // provides compression functionality implemented using gzip algorythm. (like zip files) (has built in transform stream)

// a pipe takes a readable stream and connects it to a writable stream
// we use the pipe method to a writable stream to implement the functionality
// a pipe returns the destination stream which enables chanings, however the condition is that the destination stream has to be readable, duplex or a transform stream.

// readable stream from which data can be read  - ex: reading from a file as a readable stream
// duplex stream that are both readable and writable - ex: Sockets as a duplex stream
// transform streams that can modify or transform the data as it is written and read - ex: file compression where you can write compress data and read de-compressed data

///////////////////////

const gzip = zlib.createGzip()

const readableStreamZip = fs.createReadStream('./file1.txt', {
    encoding: 'utf-8',
    highWaterMark: 2 // chunks of two bytes
})

readableStreamZip.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz')) //chining pipes


////////////////////////

const readableStream = fs.createReadStream('./file1.txt', {
    encoding: 'utf-8',
    highWaterMark: 2 // chunks of two bytes
})

const writableStream = fs.createWriteStream('./file2.txt')

readableStream.pipe(writableStream) 

// readableStream.on('data', (chunk) => {
//     console.log(chunk)
//     writableStream.write(chunk)
// })


