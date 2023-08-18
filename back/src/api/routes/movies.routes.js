const express = require("express")
const {getMovies,postMovie,putMovie,deleteMovie} = require("../controllers/movies.controllers")
const {isAuth, isAdmin} =require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");

const moviesRoutes = express.Router();

moviesRoutes.get("/", getMovies);
moviesRoutes.post("/",upload.single("image"), postMovie);
moviesRoutes.put("/:id",upload.single("image"), putMovie);
moviesRoutes.delete("/:id", deleteMovie);

module.exports= moviesRoutes;