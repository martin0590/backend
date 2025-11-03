#!/usr/bin/env node

// const yargs = require('yargs)
// const { argv } = yargs(proces.argv)
const inquirer = require('inquirer')

const printFirstFiveMoves = async (pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const pokemon = await response.json()
    const moves = pokemon.moves.map(({ move }) => move.name)
    console.log(moves.slive(0,5))
}

const prompt = inquirer.createPromptModule()
prompt([{ //each question is an object in the array
    type: 'input',
    name: 'pokemon',
    message: 'Enter a pokemon name to view its first 5 moves'    
}]).then((answers) => {
    const pokemon = answers.pokemon
    printFirstFiveMoves(pokemon)
})

// printFistFiveMoves(argv.pokemon) // need to pass --pokemon=pikachu


// dont neet to publish the module to npm
// can do npm install -g
// the command will install this module globally
// i can now use the command specified in package.json under "bin".