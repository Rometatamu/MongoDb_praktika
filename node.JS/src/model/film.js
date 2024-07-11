
import mongoose from "mongoose";

const filmSchema=mongoose.Schema({
    title:{type: String, required: true, min:3},
    raiting:{type:Number, require: true},
    description:{type:String, required:true, min:3},
    imdbLink:{type:String, required:true, min:10},
});
export default mongoose.model("Film", filmSchema);