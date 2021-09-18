const Logger = require("./logger");
const fs = require("fs");
const path = require("path");
const dataPath = "./data";
const includes = fs.existsSync(dataPath);
console.log(includes);
const writeToFile = (data) => {
	if (includes) {
		fs.appendFile(
			path.join(__dirname, "/data", "final_data.txt"),
			JSON.stringify(data),
			(err) => {
				if (err) throw err;
				console.log(" appended");
			}
		);
	} else {
		fs.mkdir(path.join(__dirname, "/data"), {}, (err) => {
			if (err) throw err;
			console.log("Folder Created");
		});
		fs.writeFile(
			path.join(__dirname, "/data", "final_data.txt"),
			JSON.stringify(data),
			(err) => {
				if (err) throw err;
				console.log("Data added");
			}
		);
	}
};
const logger = new Logger();
logger.on("message", (data) => writeToFile(data));
logger.log("Bro");
