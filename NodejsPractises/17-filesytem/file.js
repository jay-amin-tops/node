const fs = require("fs");




const writefile = (data) => {
    //console.log(data)
    const allData = loadData();
    console.log(allData)
    const duplicate = allData.find((thedata) => {
        return thedata.title === data.title;
    })

    if (duplicate) {

        console.log("duplicate title");
        return;
    }

    allData.push(data);
    const myData = JSON.stringify(allData)
    fs.writeFileSync('Test.JSON', myData, (err) => {
        if (err)
            console.log("something went wrong!!!!");


        console.log("Data inserted....")
    })

}

const readfile = () => {

    const data = loadData();
    console.log(data);
}

function loadData() {

    try {
        const data = fs.readFileSync("Test.JSON", { encoding: 'utf-8' })
        return JSON.parse(data)
    } catch (error) {
        return [];
    }



}




const removeTitle = (title) => {

    const alldata = loadData();

    const data = alldata.filter((theData) => {
        return theData.title != title;
    })

    console.log(data)

    const myData = JSON.stringify(data);
    fs.writeFileSync('Test.JSON', myData, (err) => {
        if (err)
            console.log("something went wrong!!!!");


        console.log("Data inserted....")
    })


}
module.exports = { writefile, readfile, removeTitle }


