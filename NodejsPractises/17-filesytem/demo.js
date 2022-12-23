const fs = require("fs");


// fs.readFile("sample.txt", "utf-8", (err, data) => {
//     console.log(data);
// })
// console.log("function called....");

var data = fs.readFileSync("sample.txt", "utf-8");
console.log(data);
console.log("function called....");
