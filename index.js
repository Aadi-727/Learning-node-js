const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
	/*
	if (req.url === "/") {
		fs.readFile(
			path.join(__dirname, "./public", "index.html"),
			"utf8",
			(err, content) => {
				if (err) throw err;
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(content);
			}
		);
	}
	// ? About
	if (req.url === "/about") {
		fs.readFile(
			path.join(__dirname, "./public", "about.html"),
			"utf8",
			(err, content) => {
				if (err) throw err;
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(content);
			}
		);
	}
	// * Make api

	if (req.url === "/api/users") {
		const users = [
			{ name: "Zoyo", age: 21 },
			{ name: "Bob Smith", age: 40 },
			{ name: "John Smith", age: 30 },
		];
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(users));
	}
	 */

	// * Build file path ---> Make it dynamic
	let filePath = path.join(
		__dirname,
		"public",
		req.url === "/" ? "index.html" : req.url
	);
	// extension of the file
	let extname = path.extname(filePath);
	// set content type
	let contentType = "text/html";

	// switch content type
	switch (extname) {
		case ".js":
			contentType = "text/javascript";
			break;
		case ".css":
			contentType = "text/css";
			break;
		case ".json":
			contentType = "application/json";
			break;
		case ".png":
			contentType = "images/png";
			break;
		case ".jpg":
			contentType = "text/jpg";
			break;

		default:
			break;
	}

	// Read filePath
	fs.readFile(filePath, (err, content) => {
		if (err) {
			if (err.code == "ENOENT") {
				// Page not found
				fs.readFile(
					path.join(__dirname, "/public", "404.html"),
					(err, content) => {
						res.writeHead(200, { "Content-Type": "text/html" });
						res.end(content, "utf-8");
					}
				);
			} else {
				//  Some Server Error
				res.writeHead(500);
				res.end(`Server Error: ${err.code}`);
			}
		} else {
			// ? Success
			res.writeHead(200, { "Content-Type": contentType });
			res.end(content);
		}
	});
});

server.listen(PORT, () => {
	console.log(`Server Running on port: ${PORT}`);
});
