import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";

const app=express();


app.use(cors({
  origin: process.env.ALLOW_URL,
  credentials:true
}))


app.use(express.json(
  {
    limit:"16kb" //limit of json file
  }
))

app.use(express.urlencoded({ //for url param and its limit setting
  extended:true,
  limit:"16kb"
}))



app.use(express.static("public")) //for static pics to upload

app.use(cookieParser);

export default app;