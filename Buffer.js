const buffer = new buffer.from("Martin", "utf-8") //utf8 is default

console.log(buffer) // raw binary data that is displayed as output

console.log(buffer.toJSON()) // an object with the type and the data in unicode character