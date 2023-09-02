const express = require('express');
require('./config.js');

const modelschema = require('./modelschema');
 
const app=express();
app.use(express.json());

app.post("/",async (req,res)=>{
    let data= new modelschema(req.body);
    let result= await data.save();
    console.log(result);
    res.send(result);
});

app.get("/list",async (req,res)=>{
    let data= await modelschema.find();
    res.send(data);
})

app.delete("/delete/:_id",async (req,res)=>{
    console.log(req.params);
    let data= await modelschema.deleteOne(req.params);
    
    res.send(data);
})
app.put("/update/:_id", async (req,res)=>{
    console.log(req.params);
    let data= await modelschema.updateOne(
        req.params,{$set:req.body}
        );
    res.send(data);
})

app.listen(5500);

