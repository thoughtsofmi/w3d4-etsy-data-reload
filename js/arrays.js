//stand way to make lists.
var invites = ['Matt', 'Susan', 'Jessica', 'John']

var tasks = new Array (3)
tasks[0] = 'Buy Food'
tasks[1] = 'Feed pets'
tasks[2] = 'Cook food'

// or

var inbox = new Array ('Water-Bill', 'Pay Check', 'Greeting Card')
// adding index. number 3 to add it
inbox[3] = 'You have rich uncle that wants to give you money.'

//pushes it at the end of the list. pop removes the last one.
tasks.push('Do homework')
tasks.pop()
// beginning
tasks.unshift('Watch Netflix')
//reindex and takes off of unshift and puts on top
var thingIGotRidOf=tasks.shift()
//tasks[0] = 'Watch Hulu'
//console.log(tasks)
//lets you take a slice.  start at 1 and go to 3. to take out paycheck.  if we didn't have var paycheck, then you don't know what you took out.
var paycheck = inbox.slice(1,3)
//console.log(paycheck)
//splice let's you go into the array and let yo (start, how many things you want to remove(typically dev use 0)), third is to put what you want to insert
inbox.splice(1, 0, 'You are Hired', 'Job Offer' )
//console.log(inbox)

//deleve a variable or array.  it delete the value, but not the space.  saying it's nothing there in the zero index.  why there is a comma.
//delete inbox[0] // leaves a gap
//delete inbox // suppose to delete the variable. and give it undefined.  delete is a keywork.
//console.log(inbox)

//counting things in our lists.  not char.  counted 6 in terminal.  length will give you one more your actual have because index starts at 0.  do [inbox.legnth] to keep adding things on the end.
inbox[inbox.length]='Invite to Spotify'
// console.log(inbox.length)
// console.log(inbox)

//going to be case sensitive and exact word of 'Job Offer'
var hasJobOffer = inbox.includes('Job Offer')

inbox.push('Job Salary')
// want to to know the job offer index.
var jobOfferIndex = inbox.indexOf('Job Offer')
var jobOfferIndex = inbox.indexOf('Job Salary')//indexOf returns -1 when it can't find a match
if (inbox.indexOf('JobSalary') === -1) {
    //console.log("no salary yet.")
}
else {
    //console.log('It is finally here!')
}

//console.log(jobOfferIndex)


// console.log(inbox)
// inbox.find(function(item){
//     return item.includes('Job')
// })

//called anonomous function.  block of code that is going to get run everyone of this repeated.  looking for return if there is a match and false if there is not a match

//finds all the matches as an array
            // var matches = inbox.find(function(item){
            //     return item.includes('Job')
            // })

function checkForJob(item){
    return item.includes('Job')
}
var matches = inbox.filter(checkForJob)
console.log(matches)

//imparative code.  trying to get an aray.  need to var to get a console.log(hasJob) hasJob is an boolean.  need a list.  so var matches []
var matches = []
for(var i =0; i <inbox.length; i++) {
    //console.log(i + '. ' + inbox[i])
    var hasJob = checkForJob(inbox[i])
    if (hasJob) {
        matches.push(inbox[i])//true then push it onto the array
    }

}
    //console.log(matches)

// var matches = inbox.filter(checkForJob)
//
// var matches.filter(function(item){
//     return item.includes('job')
// })

                    // for(var i =inbox.length-1; i >=0; i--) {
                    //     console.log(i + '. ' + inbox[i])
                    // }

var reverseInbox = inbox.reverse()
//console.log(reverseInbox)

inbox = inbox.reverse()
//console.log(inbox)

// ~~~~~~~~~~~~~~~
var fruit = ['Apple', 'Banana', 'Cherry', 'Watermelon']

fruit.forEach(function(item){
    //console.log(item.toUpperCase())
})
//map transforms an array of items, one item at a time.  assigned the output of the map to a new variable.
fruit = fruit.map(function(item,i){
    return `<div>${item}</div>`
})
//console.log(fruit)
//
fruit = fruit.map(function(item,i){
    if (i===2){
        //return `<section>${item.toUpperCase}</section>`
    }
    else {
        //return `<div>${item}</div>`
    }
})
//console.log(fruit)

//map reduce.
var prices = [
    {price: 7.98},
     {price: 14.99},
     {price:2.30},
     {price:12.80}
 ]
var total = prices.reduce(function(previous, current){
 return {price: previous.price + current.price}
},{price: 0})

var avgPrice = total.price / prices.length
//console.log(avgPrice)
