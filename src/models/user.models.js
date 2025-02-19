import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const userSchema=new mongoose.Schema({


  // id: {
  //   type: String,
  //   unique:true,
  //   required:true

  // }, //something given by mongodb 
  watchHistory:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"video"
}],
username:{
  type:String,
  required:true,
  unique:true,
  min:3,
  max:8,
  lowercase:true,
  index:true

},
email:{
  type:String,
  required:true,
  unique:true,
  

},
fullname:{
  type:String,
  required:true,
  index:true
 

},
avatar:{
  type:String,
  limit:"16kb",
  required:true

},
coverImage:{
  type:String,


},
password:{
  type:String,
  required:[true,"password is required"]           //in db it is encrypted 

},
refreshToken:{
  type:String
}









},{timestamps:true})


export const user=mongoose.model("user",userSchema);
