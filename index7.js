//Here we can't handle Asynchronous data.
//here we are declaring two variables a and b.
//we have to print sum of a and b.
//first of all value of b=0 and after that value of b=20. so we have to print a+b.
//The updation of b=20 is takes time of 2 milisecond.
//so we all know that it is asynchronous so a+b doesn't wait for updation od b=20. here we get wrong answer. it is the problem.

/* let a=20;
 let b=0;

setTimeout(()=>{
    b=20;
})

console.log(a+b);
*/

//So for resolve this problem, we can use callback,promise etc methods.
//but use of callback is old fashioned way.
//nowadays promise is most usable.
//Here we can take our updated b into the promise function.
//and we can pass updated value of b into the rsolve function and that data will be pass to the 
//then function and it will wait until the b's data is completely updated and 
//after 2 milisecond it will show its right result.

let a=20;
let b=0;

let waitingData= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20); // here we can pass integer, strings, array and so on.
    },2000)
})

waitingData.then((data)=>{ //here we write data that passed from the resolve function.
    b=data;
    console.log(a+b);
})