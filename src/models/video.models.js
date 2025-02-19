import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new mongoose.Schema({
id:{
  type:String,
  required:true,
  unique:true,
  lowercase:true
},
videoFile:{
  type:String,
  required:true
},
thumbnail:{
  type:String,
  required:true
},
owner:{
  type:mongoose.Schema.Types.ObjectId,
  required:true,
  ref:"user"
},
title:{
  type:String,
  required:true,
  max:15
},
description:{
  type:String,
  max:400
},
duration:{
  type:Number,
  required:true
},
views:{
  type:Number,
  required:true,
  default:0
},
isPublished:{
  type:Boolean,
  required:true
}







},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate);


export const video =mongoose.model("video",videoSchema)