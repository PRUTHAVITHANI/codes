const express = require("express");
const EventEmitter = require("events");
 //Event emitter is a class that's why we use first letter as capital

 const app=express();
const event = new EventEmitter();
let count=0;
 app.get("/",(req,res)=>{
    res.send("api called");
 });
event.on("countAPI",()=>{
    count++;
    console.log("event called",count);
})


 app.get("/search",(req,res)=>{
    res.send("search api called");
    event.emit("countAPI");
 });

 app.get("/update",(req,res)=>{
    res.send("update api called");
 });

 app.listen(5000);