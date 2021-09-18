const http = require("http");

const PORT = 5000 || process.env.PORT;
//  Create server instance
http
	.createServer((req, res) => {
		// Write a response
		res.write("Zoyo");
		res.end();
	})
	.listen(PORT, () => console.log(`Server Running in port: ${PORT}`));
