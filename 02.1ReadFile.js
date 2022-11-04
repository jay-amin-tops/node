const fs = require('fs');

fs.readFile("input.txt","UTF-8",(er,data)=>{
    console.log("Jay Amin",data);
})
console.log("reading file.....");