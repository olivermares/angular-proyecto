const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { connect } = require("./src/utils/db");
const userRoutes = require("./src/api/routes/user.routes");
const filmRoutes = require("./src/api/routes/film.routes");
const characterRoutes = require("./src/api/routes/character.routes");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

const PORT = process.env.PORT;
const app = express();

connect();
app.use(
  cors({
    origin: "*",
    credential: true,
  })
);

app.use(express.json());
app.use("/", userRoutes);
app.use("/Film", filmRoutes);
app.use("/Character", characterRoutes);


app.listen(PORT, () =>
  console.log(`escuchando en el puerto http://localhost:${PORT}`)
);
