const fs = require("fs");
const path = require("path");

// Create folder

/* 
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
	if (err) throw err;
	console.log("Folder Created");
});
 */

//? Create and write to file

// fs.writeFile(
// 	path.join(__dirname, "/test", "index.txt"),
// 	"Zoyo is here",
// 	(err) => {
// 		if (err) throw err;

// 		fs.appendFile(
// 			path.join(__dirname, "/test", "index.txt"),
// 			"\nZoyo is Cool",
// 			(err) => {
// 				if (err) throw err;
// 				console.log("File created");
// 			}
// 		);

// 		console.log("File created");
// 	}
// );

// ? Read file

// fs.readFile(path.join(__dirname, "/test", "index.txt"), "utf-8", (err, res) => {
// 	if (err) throw err;
// 	console.log(res);
// });

// ? Rename files

// fs.rename(
// 	path.join(__dirname, "/test", "index.txt"),
// 	path.join(__dirname, "/test", "Hello.txt"),
// 	(err) => {
// 		if (err) throw err;
// 		console.log("File renamed....");
// 	}
// );
