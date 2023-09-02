const fs= require('fs');

const path= require('path');
const dirPath = path.join(__dirname,'CRUD');
const filePath = `${dirPath}/apple.txt`;


//create file and write into the file
// fs.writeFileSync(filePath,"C=Create , R=Read, U=Update, D=Delete ");

//Read file
// fs.readFile(filePath,'utf8',(error,files)=>{
//     console.log(files);
// })

//update file
// fs.appendFile(filePath," and this is CRUD",(error)=>{
//     if(!error) console.log("file is updated.")
// });

//Rename file
// fs.rename(filePath, `${dirPath}/crud.txt`,(error)=>{
//     if(!error) console.log("file is renamed");
// });

//Delete file
fs.unlinkSync(`${dirPath}/crud.txt`);
