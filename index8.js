const express = require('express');
const app= express();
app.get('',(req,res)=>{
    res.send(`<h1>Hello, this is Home Page</h1>
            <a href="/about">Go to about us page</a>
            <a href="/help">Go to help us page</a>
    `);
}); //get() provides routes in first parameter. to make normal web pages.

app.get('/about',(req,res)=>{
    
    res.send(`<h1>Hello, this is about us page</h1>
    <a href="/">Go to home page</a>
    <a href="/help">Go to help us page</a>
    `);
});

app.get('/help',(req,res)=>{
    res.send(`<h1>Hello, this is help us page</h1>
    <a href="/">Go to home page</a>
    <a href="/about">Go to about us page</a>
    `);

});

//create server directly from express js. easier than nodejs create server method.
app.listen(5000);