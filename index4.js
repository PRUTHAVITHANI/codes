const fs= require('fs');

const path = require('path');
const dirPath = path.join(__dirname,'files');
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","A simple text file");
//     // fs.writeFileSync(`hello${i}.txt`,"A simple text file");
// }
// console.warn(dirPath);


//if we want to read the content inside the files then we can write readfile but here we want to 
//read the list of the files from the directory so we can use here file readdir.
fs.readdir(dirPath,(error,file)=>{
    // console.warn(file);
    file.forEach(element => {
            console.log("File Name is : " ,element);        
    });
});