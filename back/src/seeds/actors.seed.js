const Actors = require("../api/models/actors.models");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const arrayActor = [
    {
        "name": "Quentin Tarantino",
        "image": "https://valenciaplaza.com/public/Image/2023/5/EuropaPress_2628194_02_february_2020_england_london_american_filmmaker_quentin_tarantino_NoticiaAmpliada.jpg"
    },
    {
        "name": "Pedro Almodovar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/44/Pedro_Almod%C3%B3var_at_Premios_Goya_2017_1_%28cropped%29.jpg"
    },
    {
        "name": "Cristopher Nolan",
        "image": "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        "name": "Taika Waititi",
        "image": "https://media.vandalsports.com/i/640x360/6-2023/20236192829_1.jpg"
    },
];

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allActors = await Actors.find();
    if (allActors.length > 0) {
        await Actors.collection.drop();
        console.log("Actors borrados");
    }
})
.catch((error)=> console.log("Error al borrar los actors",error))
.then(async ()=> {
    const actorsMap = arrayActor.map((actor) => new Actors(actor));
    await Actors.insertMany(actorsMap);
    console.log("Actores insertados correctamente");
})
.catch((error) => console.log("Error al insertar los actores", error))
.finally(()=> mongoose.disconnect());