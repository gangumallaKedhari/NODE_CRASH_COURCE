const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname,"//test"), {}, err =>{
//     if (err) throw err;
//     console.log("Folder created...");
// })



// fs.writeFile(path.join(__dirname,"//test", 'hello.txt'), 'helloworld!', err =>{
//     if (err) throw err;
//     console.log(" file written to...");

//     // append //
//     fs.appendFile(path.join(__dirname,"//test", 'hello.txt'), 'I love Node.js', err =>{
//     if (err) throw err;
//     console.log(" file written to...");
// });
// });



// fs.readFile(path.join(__dirname, "//test", 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
 



fs.rename(path.join(__dirname, "//test", 'hello.txt'),
          path.join(__dirname, "//test", 'helloworld.txt'), (err, data) => {
    if (err) throw err;
    console.log("file renamed...");
});