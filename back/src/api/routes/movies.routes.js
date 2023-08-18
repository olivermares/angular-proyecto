const express = require("express")
const {getMovies,postMovie,putMovie,deleteMovie, comprabar} = require("../controllers/movies.controllers")
const upload = require("../../middlewares/upload.file");

const moviesRoutes = express.Router();

moviesRoutes.get("/", getMovies);
moviesRoutes.post("/", postMovie);
moviesRoutes.put("/:id", putMovie);
moviesRoutes.delete("/:id", deleteMovie);

//moviesRoutes.post("/",upload.single("image"), postMovie);
//moviesRoutes.put("/:id",upload.single("image"), putMovie);

module.exports= moviesRoutes;