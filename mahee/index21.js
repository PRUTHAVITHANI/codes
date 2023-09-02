const mongoose= require('mongoose');

const main = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/mahee1");
    const infschema = new mongoose.Schema({
        name:String,
        id:String
    });
    const infmodel = mongoose.model('students',infschema);
    let data= new infmodel({name:"prutha","id":"21ce029"});
    let result = await data.save();
    console.log(result);
}

main()