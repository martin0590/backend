const pizzaShop = require('./modules/pizza-shop')
const drinkMachin = require('./modules/drink-machine')

const newPizzaShop = new PizzaShop()
const newDrinkMachine = new DrinkMachine()

newPizzaShop.on("order", (size, topping) => {
    console.log(`Order recieved! baking a ${size} pizza with ${topping}`)
    newDrinkMachine(size)
})

newPizzaShop.order()
newPizzaShop.displayOrderNumber()