const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'employee'

MongoClient.connect(connectionURL, (err, client) => {

    if (err) {
        console.log(err);
        return;
    }

    const db = client.db(databaseName);
    console.log("connection established successfully !!!...");

    // db.collection('data').insertOne({
    //     "Name": "Raj",
    //     "Email": "raj@gmail.com",
    //     "Dept": "CN"
    // }).then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })

    // db.collection('data').insertMany([{
    //     "Name": "Raj",
    //     "Email": "raj@gmail.com",
    //     "Dept": "CN"
    // },
    // {
    //     "Name": "Aarti",
    //     "Email": "rarti@gmail.com",
    //     "Dept": "ios"
    // }
    // ]).then(result => {
    //     console.log(result.)
    // }).catch(err => {
    //     console.log(err);
    // })

    // db.collection('data').findOne({ "Dept": "Node" }).then(result => {

    //     console.log(result);
    // }).catch(err => {
    //     console.log(err);
    // })

    // db.collection('data').find().toArray((err, data) => {
    //     console.log(data);

    // })


    // var myObj = { "Name": "Milan", "Email": "milan@gmail.com", "Dept": "Php" };
    // db.collection("data").insertOne(myObj, (err, data) => {
    //     if (err)
    //         console.log(err);

    //     console.log(data.insertedId)
    // })

    // var myObj = [{ "Name": "Milan1", "Email": "milan@gmail.com", "Dept": "android" },
    // { "Name": "Milan2", "Email": "milan@gmail.com", "Dept": "flutter" },
    // { "Name": "Milan3", "Email": "milan@gmail.com", "Dept": "angular" }];
    // db.collection("data").insertMany(myObj, (err, data) => {
    //     if (err)
    //         console.log(err);

    //     console.log(data)
    // })

    // db.collection("data").findOne({ "Name": "Milan" }, (err, data) => {
    //     console.log(data)
    // })

    // db.collection("data").find({ "Name": "Raj" }, { projection: { _id: 0, Name: 1, Email: 1 } }).toArray((err, data) => {
    //     console.log(data);
    // })

    // db.collection("data").find({ "Name": /^R/ }, { projection: { Name: 1 } }).toArray((err, data) => {
    //     console.log(data);
    // })

    // db.collection("data").find({}, { projection: { Name: 1 } }).sort({ "Name": -1 }).toArray((err, data) => {
    //     console.log(data);
    // })

    // db.collection("data").deleteOne({ "Name": "Milan" }, (err, data) => {
    //     console.log(data);
    // })

    // db.collection("data").deleteMany({ "Name": "Raj" }, (err, data) => {
    //     console.log(data);
    // })

    // db.collection('registration').drop((err, data) => {
    //     console.log(data);
    // })

    // db.collection("data").updateOne({ "Name": "Abc" }, { $set: { "Dept": "Python" } }, { upsert: true }, (err, data) => {
    //     if (err)
    //         console.log(err);
    //     console.log(data)
    // });

    db.collection('data').find().limit(2).toArray((err, data) => {
        console.log(data);

    })



})