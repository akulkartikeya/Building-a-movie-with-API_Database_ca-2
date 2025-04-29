const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose')
const userSchema=require('./schema')
require('dotenv').config();

const app = express();
const port = 5000;


async function connectDataBase(){
  try{
    await mongoose.connect(process.env.MongoDB_URI)
    console.log('Connected to database')

  }catch(err){
    console.log('Error connecting to database')
  }
}
connectDataBase();

app.get("/", (req, res) => {
    try {
        const schema = new userSchema(req.body);
    } catch (error) {
        res.status(500).send({msg:"something went wrong",error})
    }
  res.status(200).send({msg:"this is get request"});
});

app.put("/",(res,req)=>{
    try {
        const schema = new userSchema(req.body);
        res.status(200).send({msg:"this is put request"});
    } catch (error) {
        res.status(500).send({msg:"something went wrong",error}) 
        
    }
    res.status(200).send({msg:"this is put request"});
});

app.delete("/",(res,req)=>{
    try {
        const schema = new userSchema(req.body);
        res.status(200).send({msg:"this is delete request"});
    } catch (error) {
        res.status(500).send({msg:"something went wrong",error})
    }
    res.status(200).send({msg:"this is delete request"});
});

app.post('/api/users',async (req,res)=>{
  try{
  const schema = new userSchema(req.body);
  const savedUser = await schema.save();
  res.status(201).send({msg:'user created ',data:savedUser})
  }catch(err){
    res.status(500).send({msg:'something went wrong',err})
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default Server.js;