const coffeeMenu = require("./coffee_data")


// Practice 2.0

// const names = coffeeMenu.map((item) => {
//     return item.name
// })
// console.log(names);


//Practice 2.1

// const names1 = coffeeMenu.forEach((item) => {
//     console.log(item.name)
// })
// console.log(names1);


// Practice 3.0
// const fiveUnder = (item) => {
//     return item.price <= 5;
// }
// const cost = coffeeMenu.filter(fiveUnder)
// console.log(cost)


//Practice 3.1
// const fiveUnder = coffeeMenu.filter((item) => {
//     return item.price <= 5
// })
// console.log(fiveUnder)


//Practice 4
//we will be using the filter array where we are also use the % operator and this way we can
// see what is the output.
const evenPrice = coffeeMenu.filter((item) => item.price % 2 === 0);
console.log(evenPrice)

//Practice 5

//We ues the forEach method to iterate over each item from coffeeMenu
// let totalCost = 0;

coffeeMenu.forEach((item) => {
    totalCost += item.price
})
console.log(totalCost)


//Practice 6:
// we will use the filter array to look for the true value of the seasonal items. 
const seasonalItem = coffeeMenu.filter((item) => item.seasonal === true)
//also we will use the forEach method to iterate through the array to look for the === true value.
seasonalItem.forEach((item) => {
    console.log(item.name)
})





//Practice 7 :

//creatign a function to add the imported beans str to the names.
const isSeasonal = (drink) => {
    return drink.seasonal;
}
//filtering the coffeeMenu and adding the string
console.log(coffeeMenu.filter(isSeasonal))


//Maping the function 
const addName = (drink) => {
    if (drink.seasonal) {
        drink.name += " with imported beans";
    }
    return drink
}
//when we have the new names we have to map-it down to only show the new items in the new map Array
const drinksWithNewNames = coffeeMenu.map(addName)

console.log(drinksWithNewNames)

console.log(drinksWithNewNames.filter(isSeasonal))

