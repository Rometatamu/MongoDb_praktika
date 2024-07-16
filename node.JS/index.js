
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import filmRouter from  "./src/router/film.js";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_CONNECTION)
 .then(()=>console.log("Coneneczted to DB successfuly"))
 .catch((err)=>{
    console.log(err);
});

app.use(filmRouter);

  
app.listen(process.env.PORT, ()=>{
    console.log(`Your application was launched successfuly on port ${process.env.PORT}`);
});