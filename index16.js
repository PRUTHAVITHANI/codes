//Insert data from database

const dbconnection = require('./mongodb');
const insert = async ()=>{
    const db= await dbconnection();
    const result = await db.insertMany(
        [{
            'name' : 'Mahee',
            'Id' : '21CE029',
            'Age':19      
        },
        {
            'name' : 'Prutha',
            'Id' : '21CE030',
            'Age':19
        },
        {
            'name' : 'Mitwa',
            'Id' : '21CE141',
            'Age':19 

        }
    ]
    )
    console.log(result);
}

insert();