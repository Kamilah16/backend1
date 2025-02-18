import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";
import express from "express";


const db_connect=async () =>{

  try{
   const connectionInstance=await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
   console.log(`db connected and connection host :,${connectionInstance.connection.host}`);

  }
  catch(error){
    console.error("mongo db error caused ",error);
  }







}
export default db_connect;