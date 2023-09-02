const mongoose= require('mongoose');

const main = async()=>{
    await mongoose.connect("mongodb+srv://maheegadhiya2003:1234567890@cluster0.rddmmha.mongodb.net/");
    const infschema = new mongoose.Schema({
        name:String
    });
    const infmodel = mongoose.model('tutorials',infschema);
    let data= new infmodel({name:"Mahee"});
    let result = await data.save();
    console.log(result);
}

main()