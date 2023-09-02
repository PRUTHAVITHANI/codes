
const express = require('express');
const path = require('path');
const app = express();
const publicpath= path.join(__dirname,'public');

app.set('view engine','ejs');

//here we don't use request so that's why instead of request here i have included '_' at the place of request.
app.get('',(_,res)=>{
    res.sendFile(`${publicpath}/index.html`)  
})
app.get('/profile',(_,res)=>{
   const user=
    {
        name:'Mahee Gadhiya',
        email:'maheegadhiya2003@gmail.com',
        city:'Surat',
        skills : ['php','js','c++','html','css']    
    }
   
   
   res.render('profile',{user});
});

app.get('/login',(_,res)=>{
    res.render('login');
})

app.listen(5000);
