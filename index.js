// const Person = require('./person')
// const person1 = new Person('Jhon', 30);

// person1.greeting();

 
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data => console.log('Called Listener', data ));

// logger.log('Hello world');
// logger.log('Hi');
// logger.log('Hello');


const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // if (req.url === '/') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'),
    //         (err, content) => {
    //             if (err) throw err;
    //             res.writeHead(200,{ 'Content-Type': 'text/html' } );
    //             res.end(content);     
    //         });
    // }



// if (req.url === '/api/users') {
    // const users = [
    //     {name:'Bod smith', age: 40},
    //     {name:'john Doe', age: 30}

    // ];
    // res.writeHead(200,{ 'Content-Type': 'application/json' } );
    // res.end(JSON.stringify(users));

    // fs.readFile(
    //     path.join(__dirname, 'public', 'about.html'),
    //     (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200,{ 'Content-Type': 'text/html' } );
    //         res.end(content);     
    //     });

    
    
    //Build file path
    let filePath = path.join(
        __dirname, 'public', 
        req.url === '/' ? 'index.html' : req.url
    );
    // console.log(filePath);
    // res.end();
// }
console.log(filePath);
//Extension of file
let extname = path.extname(filePath);
console.log(extname);
// Initial content type
let contentType = 'text/html';

//Check ext and set content type
switch(extname){
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.css':
        contentType = 'text/css';
         break;
    case '.json':
        contentType = 'application/json';
         break;
    case '.png':
        contentType = 'image/png';
         break;
    case '.jpg':
         contentType = ' image/jpg';
         break;
        
}
console.log(contentType);
//Read file
fs.readFile(filePath, (err, content) => {
    if(err) {
        console.log("tesgt error", err);
        if(err.code == 'ENOENT') {
            // Page not found
            fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content,'utf8');
            })
        } else {
            // some server error
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
        }
    } else {
        //Sucess
        console.log('test98');
        res.writeHead(200, {'content-type': contentType});
        res.end(content,'utf-8');

    }
});

});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));



