const Actors = require("../models/actors.models");

const getActors = async (req, res) => {
  try {
    console.log("Adquiriendo actores");
    const allActor = await Actors.find();
    return res.status(200).json(allActor);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postActor = async (req, res) => {
  try {
    console.log("Añadiendo actor");
    const newActor = new Actors(req.body);
    //newActor.image = req.file.path
    const createdActor = await newActor.save();
    return res.status(201).json(createdActor);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putActor = async (req, res) => {
  try {
    console.log("Actualizando actor");
    const { id } = req.params;
    const putActor = new Actors(req.body);
    putActor._id = id;
    putActor.image = req.file.path;
    console.log(putActor)
    const updatedActor = await Actors.findByIdAndUpdate(id, putActor, {
      new: true,
    });
    if (!updatedActor) {
      return res.status(404).json({ message: "no existe este id de actor" });
    }
    return res.status(200).json(updatedActor);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteActor = async (req, res) => {
  try {
    console.log("Borrando actor");
    const {id} = req.params;
    console.log(id);
    const deletedActor = await Actors.findByIdAndDelete(id)
    if (!deletedActor) {
        return res.status(404).json({message:"este id no existe"})
    }
    return res.status(200).json(deletedActor);
  } catch (error) {
    return res.status(500).json(error)
  }
};

module.exports = { getActors, postActor, putActor, deleteActor };
