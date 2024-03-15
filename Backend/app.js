import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import User from "./schemas/user";

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://harshith:keori69@cluster0.pmkoubt.mongodb.net/bootcamp?retryWrites=true&w=majority")
.then(()=>app.listen(6969))
.then(()=>console.log('connected'))
.catch((err)=>console.log(err));
