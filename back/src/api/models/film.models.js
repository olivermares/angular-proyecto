const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filmSchema = new Schema(
      {
        title:{type:String, required:true},
        img:{type:String, required:false},
        cast: [{type:Schema.Types.ObjectId, ref:"character", requier:false}],  
      },{
        timestamps:true
      }
);

const film = mongoose.model("film", filmSchema);


module.exports = film;