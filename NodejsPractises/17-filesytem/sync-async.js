
const fs = require("fs");

// const data = fs.writeFileSync("hello.txt", "Good morning!!!");
// console.log(data);
// console.log("data written");


// fs.writeFile("sample.txt", "good morning!!!", (err,data) => {
//     console.log("data wriiten success....");
// });
// console.log("after method....");

fs.readFile("sample.txt", "utf-8", (err, data) => {
    console.log(data);
})