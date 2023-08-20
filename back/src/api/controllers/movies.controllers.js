const Movies = require("../models/movies.models");

const getMovies = async (req, res) => {
  try {
    console.log("Get movies")
    const allMovies = await Movies.find().populate("cast");
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMovie = async (req, res) => {
  try {
    console.log("Get movie");
    const { id } = req.params;
    const movie = await Movies.findById(id);
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovie = async (req, res) => {
  try {
    console.log("Post movie")
    const newMovie = new Movies(req.body);
    //newMovie.img= req.file.path
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putMovie = async (req, res) => {
  try {
    console.log("Put movie")
    const { id } = req.params;
    const putMovie = new Movies(req.body);
    putMovie._id = id;
   // putMovie.img = req.file.path;
    const updatedMovie = await Movies.findByIdAndUpdate(id, putMovie, {
      new: true,
    });
    if (!updatedMovie) {
      return res.status(404).json({ message: "no existe este id de pelicula" });
    }
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovie = async (req, res) => {
  try {
    console.log("Delete movie")
    const {id} = req.params;
    const deletedMovie = await Movies.findByIdAndDelete(id)
    if (!deletedMovie) {
        return res.status(404).json({message:"este id no existe"})
    }
    return res.status(200).json(deletedMovie);
  } catch (error) {
    return res.status(500).json(error)
  }
};

module.exports = { getMovies, getMovie, postMovie, putMovie, deleteMovie};
