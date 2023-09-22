import mongoose from 'mongoose';
import mongoosePaginate from "mongoose-paginate"
 
let centresSchema=new mongoose.Schema({
    id:{type:Number,required:false},
    name: { type: String, required:true},
    tele: { type: String, required:false},
    adresse: { type: String, required:false},
    email: { type: String, required:false},
    ville: { type: String, required:false},
    categorie: { type: [], required:false},
    distance: { type: Number, required:false,default:0},
    nomReseau: { type: String, required:false},
    logo:{type:String,required:false},
    logoReseau:{type:String,required:false},
    lat:{type:String,required:false},
    lng:{type:String,required:false}
});

centresSchema.plugin(mongoosePaginate)
const Centre=mongoose.model("Centre",centresSchema)
export default Centre;