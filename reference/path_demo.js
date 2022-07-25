const path = require('path')

//base filepath
console.log(path.basename(__filename));

//Dirname
console.log(path.dirname(__filename));

//file extenstion
console.log(path. extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, "test", 'hello.html'));
