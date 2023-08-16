const Film = require("../models/film.models");

const getFilm = async (req, res) => {
  try {
    const allFilm = await Film.find().populate("cast");
    return res.status(200).json(allFilm);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postFilm = async (req, res) => {
  try {
    const newFilm = new Film(req.body);
    newFilm.img= req.file.path
    const createdFilm = await newFilm.save();

    return res.status(201).json(createdFilm);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putFilm = async (req, res) => {
  try {
    const { id } = req.params;
    const putFilm = new Film(req.body);
    putFilm._id = id;
    putFilm.img = req.file.path;
    const updatedFilm = await Film.findByIdAndUpdate(id, putFilm, {
      new: true,
    });
    if (!updatedFilm) {
      return res.status(404).json({ message: "no existe este id de pelicula" });
    }
    return res.status(200).json(updatedFilm);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteFilm = async (req, res) => {
  try {
    const {id} = req.params;
    const deletedFilm = await Film.findByIdAndDelete(id)
    if (!deletedFilm) {
        return res.status(404).json({message:"este id no existe"})
    }
    return res.status(200).json(deletedPeliclua);
  } catch (error) {
    return res.status(500).json(error)
  }
};

module.exports = { getFilm, postFilm, putFilm, deleteFilm };
