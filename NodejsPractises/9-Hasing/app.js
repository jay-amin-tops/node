const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

// const securePassword = async (password) => {

//     const myPass = await bcrypt.hash(password, 10);
//     console.log(myPass);

//     const matchPass = await bcrypt.compare("12345", myPass);
//     console.log(matchPass)

// }
// securePassword("tops123");

const generateToken = async () => {

    const token = await jwt.sign({ _id: "62a830268b88fe07618575d7" }, "thisiswebtokensecretkey");
    console.log(token)


    const match = await jwt.verify(token, "thisiswebtokensecretkey")
    console.log(match)
}



generateToken();



