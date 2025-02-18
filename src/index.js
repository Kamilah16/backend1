//require ('dotenv').config({path : `./env`})
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME} from "./constants";
import express from "express"
import db_connect from "./db/db1.js";
import { connect } from "http2";
dotenv.config()


dotenv.config({
  path :'./env'
})
const app=express();
db_connect();












/*(async() =>{

  try{
   await  mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
   app.on("uncaughtException", (err) => {
    console.error("🔥 Uncaught Exception:", err);
  });
  app.listen((`${process.env.PORT}`),() => {
console.log("listening to port");

  });


  



  }
  catch(error){
    console.error(error)
    throw error;

  }



})();*/