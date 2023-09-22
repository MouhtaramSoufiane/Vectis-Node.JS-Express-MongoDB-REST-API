import mongoose from 'mongoose';
import mongoosePaginate from "mongoose-paginate"
 
let rendezVousSchema=new mongoose.Schema({
    _id:{type:String,required:false},
    centre_id: { type: Number, required:true},
    first_name: { type: String, required:false},
    last_name: { type: String, required:false},
    tele: { type: String, required:false},
    adress: { type: String, required:false},
    make: { type: String, required:false},
    model: { type: String, required:false,default:0},
    year: { type: Number, required:false},
    description:{type:String,required:false},
    date:{type:String,required:false},
    time:{type:String,required:false},
    centre_name:{type:String,required:false}
});

rendezVousSchema.plugin(mongoosePaginate)
const rendezVous=mongoose.model("rendezVous",rendezVousSchema)
export default rendezVous;