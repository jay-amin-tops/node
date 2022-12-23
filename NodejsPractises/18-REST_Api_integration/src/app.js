const mongoose = require("mongoose");
const express = require("express")
const app = express();
const PORT = 3000;
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/erp").then(() => {
    console.log("Db connected successfully !!!  ")
}).catch(err => {
    console.log(err);
})

const EmployeeSchema = new mongoose.Schema({

    Name: String,
    Email: String,
    Dept: String,
    Salary: Number

})

const EmployeeDetail = new mongoose.model('EmployeeDetail', EmployeeSchema);

app.post("/employees", async (req, resp) => {
    //console.log("Post req. calling.....");
    //console.log(req.body)
    try {
        const empdetails = new EmployeeDetail(req.body);
        const result = await empdetails.save();
        resp.send(result);
    } catch (error) {
        resp.send(error);
    }

})

app.get("/employees", async (req, resp) => {

    try {

        const result = await EmployeeDetail.find();
        resp.send(result);
    } catch (error) {
        resp.send(error)
    }


})


app.get("/employees/:id", async (req, resp) => {
    const _id = req.params.id;

    try {
        const result = await EmployeeDetail.find({ _id })
        resp.send(result);
    } catch (error) {
        resp.send(error)
    }
})

app.delete("/employees/:id", async (req, resp) => {
    const _id = req.params.id;

    try {
        const result = await EmployeeDetail.findByIdAndDelete(_id);
        resp.send(result);
    } catch (error) {
        resp.send(error)
    }
})

app.put("/employees/:id", async (req, resp) => {
    const _id = req.params.id;

    try {
        const result = await EmployeeDetail.findByIdAndUpdate(_id, req.body);
        resp.send(result);
    } catch (error) {
        resp.send(error)
    }
})




app.patch("/employees/:id", async (req, resp) => {
    const _id = req.params.id;

    try {
        const result = await EmployeeDetail.findByIdAndUpdate(_id, req.body);
        resp.send(result);
    } catch (error) {
        resp.send(error)
    }
})




app.get("*", (req, resp) => {

    resp.status(404).send("Invalid API");
})

app.listen(PORT, (req, resp) => {
    console.log(`server running on PORT ${PORT}`);
})