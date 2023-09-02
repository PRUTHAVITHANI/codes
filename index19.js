  //When we create API express has important role.
  const express = require('express');
  const app= express();
const mongodb = require('mongodb');
  //import mongodb for database connection.

    const dbconnection = require('./mongodb');
const { ConnectionCheckOutFailedEvent } = require('mongodb');
app.use(express.json());    

  //get API method 

    app.get('/', async (req,res)=>{
        let data= await dbconnection();
        data= await data.find().toArray();
        console.log(data);
        res.send(data);
    })

    //Post API method
    app.post('/',async (req,res)=>{
      
      let data= await dbconnection();
      let result=await data.insertOne(req.body);
      res.send(result);
    })

    //Put API method
    app.put('/:name',async(req,res)=>{
      let data = await dbconnection();
      let result = await data.updateOne(
        // {name: req.body.name},{$set : req.body}
        {name: req.params.name},{$set : req.body}
        
      );
      res.send(result)

    })

    //Delete API method
    app.delete('/:id',async(req,res)=>{
      const data=await dbconnection();
      const result= await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
      res.send(result);
    })

app.listen(5500);