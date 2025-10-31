const path = require('node:path')

const dirName = __dirname // directory path from where im at
const fileName = __filename // filename of this file

const dirPathName = path.basename(__dirname)  //last portion of the path ex: in this case should be ./
const filePathName = path.basename(__filename) //last portion of the file name ex: path.js

const dirExtName = path.extname(__dirname)  // returns the extension of the file. in this cas is an empty string
const fileExtName = path.extname(__filename) // returns the extension of the file. in this case is .js


const fileParseName = path.parse(__filename) // is basically all of the above in one grouped in an object

const fileFormatName = path.format(path.parse(__filename)) // should return the same as using __filename

path.isAbsolute(__filename) // true if it is an absolute path. ./modules/file.js is a relative path and shoudl return false.


path.join("folder1", "folder2", "index.html") // folder1/folder2/index.html
path.join('/folder1', '/folder2', 'index.html') // /folder1/folder2/index.html
path.join('/folder1', '//folder2', 'index.html') // /folder1/folder2/index.html
path.join('/folder1', '//folder2', '../index.html') // folder1/index.html
path.join(__dirname, "data.json") // where i am at, and then append data.json

path.resolve("folder1", "folder2", "index.html") // is like join but it appends the absolute path to the arguments
path.resolve('/folder1', '/folder2', 'index.html') // it takes /folder1 as the root /folder1/folder2/index.html
path.resolve('/folder1', '//folder2', 'index.html') // it takes folder 2 as root for the double "/" /folder2/indexhtml
path.resolve('/folder1', '//folder2', '../index.html') // its /index.html
path.resolve(__dirname, "data.json") // absolute path of dirname and appends data.json