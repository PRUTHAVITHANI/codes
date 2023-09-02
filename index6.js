//This is example that node js is Asynchronous.
//Asynchronous means it will not wait to finish first task. it will just go on.
//here the output is :
//signup...
//complete...
//login...

//because i have set a limit of login to 2 milisecond. so it will take time, but as seen in output the third task doesn't wait for second task. 
//it will complete its task either the second task is completed or not.

console.log("signup...");

setTimeout(()=>{
    console.log("login...");
},2000) // 2ms 

console.log("complete...");