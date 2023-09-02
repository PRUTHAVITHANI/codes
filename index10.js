
const express = require('express');
const path = require('path');
const app = express();
const publicpath= path.join(__dirname,'public');

//here we don't use request so that's why instead of request here i have included '_' at the place of request.
app.get('',(_,res)=>{
    res.sendFile(`${publicpath}/index.html`)  
})
app.get('/mahee',(_,res)=>{
    res.sendFile(`${publicpath}/about.html`)  
})
app.get('/kunj',(_,res)=>{
    res.sendFile(`${publicpath}/help.html`)  
})

//if any page doesn't match then we can say that there is in name section i can put'*' there.
/*app.get('*',(_,res)=>{
    res.sendFile(`${publicpath}/help.html`)  
})
*/


//load pagenot found page.
app.get('*',(_,res)=>{
    res.sendFile(`${publicpath}/pagenotfound.html`)  
})
app.listen(5001);
