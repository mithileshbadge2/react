let movies = [
    {
        title:"Inception",
        director:"Christopher Nolan",
        year: 2010,
        genre:"Science Fiction",
        rating:8.8
    },
    {
        title:"The Godfather",
        director:"Francis Ford Coppola",
        year: 1972,
        genre:"Crime",
        rating:9.2
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        genre: "Action",
        rating: 9.0
    },
    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: 1994,
        genre: "Crime",
        rating: 8.9
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        genre: "Drama",
        rating: 9.3
    }
]

// let genre = ["Science Fiction", "Crime", "Action", "Drama"]
// let genre1 = genre[0]
// let genre2 = genre[1]
// let genre3 = genre[2]
// console.log(genre1)
// console.log(genre2)
// console.log(genre3)

// let [g11, g22, g33] = genre
// console.log(g11)
// console.log(g22)
// console.log(g33)

//object destructing
let firstMovie = movies[0]
// let title = firstMovie.title
// let director = firstMovie.director
// console.log(title)
// console.log(director)

let{title, director, rating, genre, year} = firstMovie
console.log(title)
console.log(rating)
console.log(director)
console.log(genre)
console.log(year)











