(function(){
    const superHero = "batman"
    console.log(superHero)
})()


(function(message){
    const superHero = "superman"
    console.log(message, superHero)
})("Hey ")


// an iife has 5 parameters that can be used
(function(exports, require, module, __filename, __dirname){
    const superHero = "superman"
    console.log(superHero)
})

// __dirname: directory name or folder name of the current folder
// __filename: file name of the current module
// require function to import modules
// module: reference to the current module