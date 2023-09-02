const express = require('express');
require('./config.js');
const modelschema = require('./modelschema');
const app = express();

app.use(express.json());

app.get('/search/:key',async (req,res)=>{
    console.log(req.params.key);
    let data = await modelschema.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"id":{$regex:req.params.key}},
                {"city":{$regex:req.params.key}} 
                // {"age":{$regex:req.params.key}}
            ]
        }
    );
    res.send(data);
})

app.listen(6000);