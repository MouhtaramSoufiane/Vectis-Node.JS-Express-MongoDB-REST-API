import mongoose from 'mongoose';
import mongoosePaginate from "mongoose-paginate"
 
let commenatiresSchema=new mongoose.Schema({
    _id:{type:Number,required:false},
    centre_id: { type: Number, required:false},
    description: { type: String, required:false},
    value: { type: Number, required:false},
    date: { type: String, required:false},
    
});

commenatiresSchema.plugin(mongoosePaginate)
const Commenatire=mongoose.model("Commenatire",commenatiresSchema)
export default Commenatire;