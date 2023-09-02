//--------> METHOD OF CREATING SERVER USING PASS FUNCTION AS A PARAMETER INSIDE A FUNCTION ITSELF.

//Making Server --> For that first of all, we have to import HTTP.
// what is done by HTTP : HTTP handles the request and response of server in Node js.

const http = require('http'); //import of hhtp modeule.
http.createServer((req,res)=>{ //function inside function as parameter.
    res.write("<h1>Mahee Gadhiiya in Ebizz Infotech</h1>");
    res.end(); //This is necessary to end respose, otherwise node js will not recognize when to end response.
}).listen(4500);

//like below example of function, we can pass parameter as function to the function.
// It means function inside the function.
// function test(a,b)
// {

// }
// test(10,20);



//-------> ANOTHER METHOD OF CREATING SERVER USING FUNCTION.

/*
const http= require('http');
function greet(req,res){
    res.write("<h1>Hello World</h1>");
    res.end();
}
http.createServer(greet).listen(4500); //Make sure that do not pass functions's bracket, otherwise it will give the error. Only pass function name.
*/

//----> How to conver this greet function to the Arrow function ?

/* 
const http= require('http');

const greet = (req,res) => {
    res.write("<h1>Hello World</h1>");
    res.end();
}
http.createServer(greet).listen(4500);
*/



