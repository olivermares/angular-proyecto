const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actorsSchema = new Schema(
      {
        name:{type:String, required:true},
        image:{type:String, required:false}
      },{
        timestamps:true
      }
);

const actors = mongoose.model("actors", actorsSchema);


module.exports = actors;