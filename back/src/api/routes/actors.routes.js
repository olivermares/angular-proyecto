const express = require("express");
const {getActors,postActor,putActor,deleteActor} = require("../controllers/actors.controllers");
const upload = require("../../middlewares/upload.file");

const actorsRoutes = express.Router();

actorsRoutes.get("/", getActors);
actorsRoutes.post("/", postActor);
actorsRoutes.put("/:id", putActor);
actorsRoutes.delete("/:id", deleteActor);

//actorsRoutes.post("/",upload.single("image"), postActor);
//actorsRoutes.put("/:id",upload.single("image"), putActor);

module.exports= actorsRoutes;