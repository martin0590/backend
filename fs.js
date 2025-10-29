const fs = require("node:fs")
const fspromise = require("node:fs/promises")

const fileContent = fs.readFileSync('textfile.txt', 'utf-8') // have to specify utf-8 for the file to not show binary data on the console.log
console.log(fileContent) // returns a buffer with binary data

// reading asynchronous 
fs.readFile('./textfile.txt', 'utf-8', (error, data) => { // error first callback pattern
    if (error){
        console.log(error)
    }else{
        console.log(data)
    }
})

// synchronous
fs.writeFileSync('./greet.txt', 'hello world!') 

//asynchronous
fs.writeFile('greet.txt', 'hello world', { flag: "a" } , (err) => { // the "flag a" is to append text
    if(err){
        console.log(err)
    }else{
        console.log("file written successfully")
    }
})


/////////////////////////////////////////////////////////////////////

// uses promises so i have to then / catch the data
fspromise.readFile('./greet.txt', 'utf-8')
.then((data) => console.log(data))
.catch((err) => console.log(err))


//can use async funtion

async function readFile() {
    try {
        const data = await fspromise.readFile('./greet.txt','utf-8')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

readFile()
