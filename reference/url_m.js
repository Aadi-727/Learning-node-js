const url = require("url");

const myUrl = new URL(
	"http://example.com:8000/hello.html?id=100&status=active"
);

// Serialized URL

console.log(myUrl.href);
console.log(myUrl.toString());

//  Host (root domain)
console.log(myUrl.host);

//  Host name (no port)
console.log(myUrl.hostname);

//  Host name
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Loop through params

myUrl.searchParams.forEach((value, name) => {
	console.log(`${name}: ${value}`);
});
