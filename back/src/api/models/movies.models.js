const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema(
      {
        title:{type:String, required:true},
        image:{type:String, required:false},
        director: {type:String},
        cast: [{type:Schema.Types.ObjectId, ref:"actors", requier:false}],  
      },{
        timestamps:true
      }
);

const movies = mongoose.model("movies", moviesSchema);


module.exports = movies;