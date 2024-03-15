import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import User from "./schemas/user.js";

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://harshith:keori69@cluster0.pmkoubt.mongodb.net/bootcamp?retryWrites=true&w=majority")
.then(()=>app.listen(6969))
.then(()=>console.log('connected'))
.catch((err)=>console.log(err));

app.post('/login', (req,res,next) => {
    console.log('worked')
    const {username, password} = req.body;
    User.findOne({username : username}).then((response) =>{
        if(response.password == password)return res.status(200).send('Successful');
        else res.send(500).send('invalid password');
    }).catch((err) =>{
        res.status(404).send('error');
    });
})
app.post('/signup', (req,res,next) => {
    const {name,email,username,password,confirmPassword} = req.body
    let user = new User({
        name,
        email,
        username,
        password
    })
    user.save().then((user) => {
        res.status(200).json({user})
    }).catch((err) => {
        res.status(400).json({err})
    })
})
