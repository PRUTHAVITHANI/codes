const dbconnection = require('./mongodb');

const deletedata = async ()=>{
    let data= await dbconnection();
    let result = await data.deleteMany({
        }, {$unset : {Id:'',Age:''}}
    )
    console.warn(result);
}
deletedata();