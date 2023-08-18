const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actorsSchema = new Schema(
      {
        name:{type:String, required:true},
        image:{type:String, required:false},
        biografy: {type:String, requider: false},
        country: {type:String, requider: false}
      },{
        timestamps:true
      }
);

const actors = mongoose.model("actors", actorsSchema);


module.exports = actors;