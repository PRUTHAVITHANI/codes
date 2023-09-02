const express=require('express');
const app= express();
//For making middleware
//next is a function which the routes that i have called on that it proceeds the function further.
const reqFilter=(req,res,next)=>{
    if(!req.query.age)
    {
        res.send("please provide age");
    }
    else if(req.query.age<18)
    {
        res.send('You can not access the page');
    }
    else{
        next();
    }
    
}

app.use(reqFilter);

app.get('/',(req,res)=>{
    res.send("Welcome to home page");
})

app.get('/users',(req,res)=>{
    res.send("Welcome to user page");
})

app.get('/about',(req,res)=>{
    res.send("Welcome to about page");
})
app.listen(5000);