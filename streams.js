// stream is a sequence of data that is being move from one point to another over time
// work with data in CHUNKS instead of waiting for the entire data to be available all at once 

// if you are transfering file contents from fileA to fileB, you don't wait for the entire fileA content to be saved in temporary memory before moving it into fileB
// instead, the content is transferred in CHUNKS over time which prevents unnecessary memory usage

const fs = require('node:fs')


// the stream extends from the event emitter class, allowing me to add a listener to events
// the buffer that streams use has a default size  of 64kb
const readableStream = fs.createReadStream('./file1.txt', {
    encoding: 'utf-8',
    highWaterMark: 2 // chunks of two bytes
})

const writableStream = fs.createWriteStream('./file2.txt')

readableStream.on('data', (chunk) => {
    console.log(chunk)
    writableStream.write(chunk)
})

// type of streams

// readable stream from which data can be read  - ex: reading from a file as a readable stream
// writable stream to which we can write data - ex: Writing to a file as a writable stream
// duplex stream that are both readable and writable - ex: Sockets as a duplex stream
// transform streams that can modify or transform the data as it is written and read - ex: file compression where you can write compress data and read de-compressed data
// to and from a file as a transform stream
