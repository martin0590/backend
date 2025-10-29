// the events module returns a class called event emiiter which encapsulates functionality to emit events and respond to events.
const eventEmitter = require('node:events')

const emitter = new eventEmitter()

// when the code executes and reach the next line, an event is broadcasted to my code.
// to respond to the order-pizza event we need to register a listener
emitter.on('oder-pizza', (size, topping) => { //responding to event
    console.log(`baking pizza of size ${size} with topping of ${topping}`)
})

// i can specify argument while emitting the event
emitter.emit("order-pizza", 'large', 'pepperonni')

// i can also register multiple listeners for the same event

