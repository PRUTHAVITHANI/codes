const mongoose= require('mongoose');

const modelschema = new mongoose.Schema({
    name:String,
    id:String,
    age:Number
})

module.exports=mongoose.model('tutorials',modelschema);