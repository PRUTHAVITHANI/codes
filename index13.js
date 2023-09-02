const express=require('express');
const app= express();
const reqFilter=require('./middleware'); //import middleware.js file.
const route= express.Router()  //write in those function that i want to apply middle ware reqfilter instead of hat use route.
route.use(reqFilter); //necessary to use reqFilter.

//For making middleware
//next is a function which the routes that i have called on that it proceeds the function further.


// app.use(reqFilter);

//directly inside the routes by adding parameter reqFilter
// app.get('/',reqFilter,(req,res)=>{
//     res.send("Welcome to home page");
// })

app.get('/users',(req,res)=>{
    res.send("Welcome to user page");
})

route.get('/about',(req,res)=>{
    res.send("Welcome to about page");
})

route.get('/contact',(req,res)=>{
    res.send("Welcome to contact page");
})

app.use('/',route);
app.listen(5000);


/*if i want to apply middleware then i can use route.get and for that first of all i have to import route module 
inside the .js file and then write route.use(reqFilter) and then those routes in which i want to apply middleware
in this use route.get instead of app.get(); */