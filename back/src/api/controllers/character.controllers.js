const Character = require("../models/character.models");

const getCharacter = async (req, res) => {
  try {
    const allChatacter = await Character.find();
    return res.status(200).json(allChatacter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacter = async (req, res) => {
  try {
    const newCharacter = new Character(req.body);
    newCharacter.img = req.file.path
    const createdCharacter = await newCharacter.save();
    return res.status(201).json(createdCharacter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharacter = new Character(req.body);
    putCharacter._id = id;
    putCharacter.img = req.file.path;
    console.log(putCharacter)
    const updatedCharacter = await Character.findByIdAndUpdate(id, putCharacter, {
      new: true,
    });
    if (!updatedCharacter) {
      return res.status(404).json({ message: "no existe este id del personaje" });
    }
    return res.status(200).json(updatedCharacter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacter = async (req, res) => {
  try {
    const {id} = req.params;
    const deletedCharacter = await Character.findByIdAndDelete(id)
    if (!deletedCharacter) {
        return res.status(404).json({message:"este id no existe"})
    }
    return res.status(200).json(deletedCharacter);
  } catch (error) {
    return res.status(500).json(error)
  }
};

module.exports = { getCharacter, postCharacter, putCharacter, deleteCharacter };
