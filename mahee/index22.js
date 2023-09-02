const mongoose= require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/test");
const infschema = new mongoose.Schema({
    name:String,
    id:String
});

const saveInDB = async()=>{
    const infmodel = mongoose.model('tutorials',infschema);
    let data= new infmodel({name:"Priyanshi","id":"21CE141"});
    let result = await data.save();
    console.log(result);
}
// saveInDB()

const updateInDB = async ()=>{
    const infmodel = mongoose.model('tutorials',infschema);
    let data = await infmodel.updateOne(
        {
            name:"Prachi"
        },
        {
            $set : {id:"21CE030"}
        }
    )
    console.log(data);
    }
    // updateInDB()

  const deleteInDB = async()=>{
    const infmodel= mongoose.model('tutorials',infschema);
    let data= await infmodel.deleteOne({name:"Mahee"});
    console.log(data);
  }
//   deleteInDB()
  
  const findInDB = async()=>{
    const infmodel= mongoose.model('tutorials',infschema);
    let data= await infmodel.find({name:"Mahee"});
    console.log(data);
  }
  findInDB()