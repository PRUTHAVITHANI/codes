const dbconnection = require('./mongodb');
//read data from database.
//for handling promise
dbconnection().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.warn(data);
    });
})
// console.warn(dbconnection()); gives error of promise.

//Another Method for handle promise.
// const main = async ()=>{
//     let data= await dbconnection();
//     data= await data.find().toArray();
//     console.warn(data);
// }

