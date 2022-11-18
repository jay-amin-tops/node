const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const StudentSchema = new mongoose.Schema({

    Name: String,
    Email: String,
    Password: String,
    Tokens: [{
        token: {
            type: String
        }
    }]
});

StudentSchema.methods.generateAuthToken = async function () {
    try {

        const token = await jwt.sign({ _id: this._id }, "thisisregistrationsecretkey");
        this.Tokens = this.Tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error)
    }

}


StudentSchema.pre("save", async function (next) {

    if (this.isModified("Password")) {
        this.Password = await bcrypt.hash(this.Password, 10)
        next();
    }
})



module.exports = mongoose.model("Student", StudentSchema);