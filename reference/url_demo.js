const url = require ('url');
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//host Rot domain//
console.log(myUrl.host);

//Hostname
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//loop through param
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

