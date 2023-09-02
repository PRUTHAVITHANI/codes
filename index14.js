//import mongodb
const {MongoClient} = require('mongodb');

//Till now node js does't know that where our mongodb is located.so for that i have to take path.
const url = 'mongodb://127.0.0.1:27017';

//Database name
const database='nodejs';

//Now we have to pass this url into mongoclient package so that nodejs can recognize mongodb.
const client = new MongoClient(url);

//So now node js is our client and mongo db is our server.

async function getdata()
{
    //sometimes it takes time to handle data so for we use promises.
    //For handle it we can use await and we can't use awit alone. for that we have to use async besides of function
    let result = await client.connect();

    //In which database of mongodb we wants to connect.
    let db=result.db(database);

    //Inside the database In which collection you have to add data.
    let collection = db.collection('Tutorials');

    //For handle the promise 
    let response = await collection.find().toArray();

    console.log(response);


}

getdata();