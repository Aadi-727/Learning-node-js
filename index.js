const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
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

	if (req.url === "/api/users") {
		const users = [
			{ name: "Zoyo", age: 21 },
			{ name: "Bob Smith", age: 40 },
			{ name: "John Smith", age: 30 },
		];
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(users));
	}
});

server.listen(PORT, () => {
	console.log(`Server Running on port: ${PORT}`);
});
