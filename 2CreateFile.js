const fs = require("fs");

//create folder
fs.mkdirSync("Practice");

// create file
fs.writeFileSync("test.txt", "This is my first module program !!!!");

fs.appendFileSync("test.txt", "Hello tops, hello node, hello world !!!!");

const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);

fs.renameSync("test.txt", "hello.txt");

fs.unlinkSync("Hello.txt");

fs.rmdirSync("Practice");