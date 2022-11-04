const fs = require('fs');


fs.readFile("startj1.txt",'utf-8',(err,data1)=>{
    console.log(data1);
    fs.readFile(`${data1}.txt`,'utf-8',(err,data2)=>{
        fs.readFile(`append.txt`,'utf-8',(err,data3)=>{
            fs.writeFile(`final.txt`,`${data2} ${data1}`,'utf-8',(err)=>{
                if (err) throw err;
                console.log("Your File has been saved :D")
            })
        })      
    })
})