//question 1 question 1 question 1 question 1 question 1 question 1 question 1
//      Show me how to calculate the average price of all items.

//used the reduce function to get the total price of all the items from the beginning of the object item to the end.  made another variable to divide the total price with the total count of the item with length.  looked up online how to make it to two decimal places.

var total = items.reduce(function(previous, current){
 return {price: previous.price + current.price}
},{price: 0})

var avgPrice = total.price /items.length

console.log('$' +avgPrice.toFixed(2))


//question 2 question 2 question 2 question 2 question 2 question 2 question 2
//     show me how to get an array of items that cost between $14.00 and $18.00.

//used the filter array to find the item price between 14 and 18.  Made another variable to map out the costbet14to18 to get a new array of title to be displayed in an object.
var costbet14to18 = items.filter(function(item) {
     return item.price > 14 && item.price < 18
})
var gettingTitle = costbet14to18.map(function(items){
  return {title: items.title}
},{items:0})
console.log("Items that cost between $14.00 and $18.00 USD:", gettingTitle)

//question 3 question 3 question 3 question 3 question 3
//      Find items w "GBP" currency code and print its name and price.
//used the filter array to filter the items to find the currency code of GBP.  I knew the exact value of what I needed.  So it was a triple = sign.  then I made two variables to use the map array to find the title and the price.  I stringed the variables with the different elements to work.
var british = items.filter(function(items){
  return items.currency_code === ('GBP')
})
var britishN = british.map(function(items){
  return items.title
})
var britishP = british.map(function(items){
  return items.price
})
console.log(britishN + ' costs '+ '£' + britishP)



//question 4 question 4 question 4 question 4 question 4
//Show me how to find which items are made of wood
// used filter iteration to look up item in the item. materials that includes wood.  then used map to get the item and title.

// var woodItem = items.filter(function(item){
//   return item.materials.includes('wood')
// })
// var woodTitle = woodItem.map(function(item){
//   return item.title
// })
// console.log(woodTitle) // need to get it out of the array


// Asked James how to get information out of Array and I made a forEach array to look for the title.
var woodItem = items.filter(function(item){
  return item.materials.includes('wood')
})

woodItem.forEach(function(titleofwood){
  console.log(titleofwood.title)
})




//question 5 question 5 question 5 question 5 question 5 question 5
//    show me how to find which items made wtih eight or more materials
// made a variable eightOrMore to filter out the items that was made with more or equal to 8 materials
//made another variable to get the item title and materials names from the previous function.
// var eightOrMore = items.filter(function(items){
//   return items.materials.length >= 8
// }
//
// var titleOfMaterials = eightOrMore.map(function(item){
//   return item.title + item.materials
// })
//
// console.log(titleOfMaterials) // need to get it out of an array and list out

// rearranged the code after talking to James to get it out of the array.
var eightOrMore = items.filter(function(items){
  return items.materials.length >= 8
})

eightOrMore.forEach(function(titleAndMaterials){
  console.log(titleAndMaterials.title + titleAndMaterials.materials)
})



//question 6
//show me how to calculate how many items were made by their sellers
//first make a variable to filter out the "who_made" from the data.  In the return value, we have to include the i_did to find out which items were actually made by their sellers.  Then you console log the variable and add a length to count how many items that were made by the sellers.
var findOut = items.filter(function(item){
  return item.who_made.includes('i_did')
})
console.log(findOut.length + ' where made by their sellers')
