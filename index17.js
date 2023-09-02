const dbconnection = require('./mongodb');

const update = async()=>{
    let data=await dbconnection();
    let result = await data.updateMany(
        { name:'Prachi' },{$set: {name:'Prachi',Id:'21CE037', Age:19 }},
    
     );

        console.log(result);

}
update();