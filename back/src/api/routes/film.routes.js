const express = require("express")
const {getFilm,postFilm,putFilm,deleteFilm} = require("../controllers/film.controllers")
const {isAuth, isAdmin} =require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");

const filmRoutes = express.Router();

filmRoutes.get("/", getFilm);
filmRoutes.post("/",upload.single("image"), postFilm);
filmRoutes.put("/:id",upload.single("image"), putFilm);
filmRoutes.delete("/:id", deleteFilm);

module.exports= filmRoutes;