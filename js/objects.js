var pizza = new Object()
pizza.meat = 'Sausage'
pizza.cheese = 'Cheddar'
pizza.veggies = 'Olives'
//second one is more common
var pizza = {
    meat: 'Sausage',
    cheese: 'Cheddar',
    veggies: 'Olives'
}
pizza.meat = 'Pepperoni'
//console.log(pizza.meat)
var topping = 'cheese'
//console.log(pizza[topping])

var props = Object.keys(pizza)
//need square brackets to dynamic grap it
props.forEach(function(prop){
    //console.log(pizza[prop])
})
//things are connecting. think Object
var movies = [
     {
        title: 'Star Wars',
        genre: 'Sci Fi',
        year: 1977,
        directors: [
            {
                name: 'George Lucas'
            },
            {
                name: 'JarJar'
            }
        ]
    },
    {
        title: 'Forest Gump',
        genre: 'Drama',
        year: 1985,
        directors: [
            {
                name: 'Robert Zemechas'//has multiple directors
            }
        ]
    }
]
//title is a string
movies.forEach(function(movie){
    var directors = movie.directors.map(function(director){
         return director.name

    })


    directors = (directors.join(', '))

    console.log(movie.title + ' - ' + movie.genre + ' (' + movie.year + ') - Directed by ' + directors )
})
