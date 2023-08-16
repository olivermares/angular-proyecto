const express = require("express");
const {getCharacter,postCharacter,putCharacter,deleteCharacter} = require("../controllers/character.controllers");
const upload = require("../../middlewares/upload.file");

const characterRoutes = express.Router();

characterRoutes.get("/", getCharacter);
characterRoutes.post("/",upload.single("image"), postCharacter);
characterRoutes.put("/:id",upload.single("image"), putCharacter);
characterRoutes.delete("/:id", deleteCharacter);

module.exports= characterRoutes;