const Movies = require("../api/models/movies.models");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


const arrayMovies = [    
    {
        "title": "Akira",
        "image": "https://pics.filmaffinity.com/akira-557684565-large.jpg"
    },
    {
        "title": "El club de los poetas muertos",
        "image": "https://www.ennetflix.mx/media/15/la-sociedad-de-los-poetas-muertos_426589.jpg"
    },
    {
        "title": "Los Goonies",
        "image": "https://m.media-amazon.com/images/I/6198vp6P7nL._SX300_SY300_QL70_ML2_.jpg"
    },
    {
        "title": "Parasitos",
        "image": "https://pics.filmaffinity.com/gisaengchung-432616131-mmed.jpg"
    },
    {
        "title": "Akira",
        "image": "https://pics.filmaffinity.com/akira-557684565-large.jpg"
    },
    {
        "title": "Akira",
        "image": "https://pics.filmaffinity.com/akira-557684565-large.jpg"
    },
    {
        "title": "Akira",
        "image": "https://pics.filmaffinity.com/akira-557684565-large.jpg"
    },
]

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allMovies = await Movies.find();
    if (allMovies.length > 0) {
        await Movies.collection.drop();
        console.log("Movies borrados");
    }
})
.catch((error)=> console.log("Error al borrar los movies",error))
.then(async ()=> {
    const moviesMap = arrayMovies.map((movie) => new Movies(movie));
    await Movies.insertMany(moviesMap);
    console.log("Movies insertados correctamente");
})
.catch((error) => console.log("Error al insertar los movies", error))
.finally(()=> mongoose.disconnect());