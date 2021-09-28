const Express = require("express");
const BodyParser = require("body-parser");
// const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectID;
// const CONNECTION_URL = "mongodb+srv://dbMuseum:admin@testdb.oijde.mongodb.net/testdb?retryWrites=true&w=majority";
// const DATABASE_NAME = "sample_weatherdata"/*"accounting_department"*/;

const connectDB = require('./connection/db');


var app = Express();
app.use(Express.json({ extended: false }));
app.use(BodyParser.urlencoded({ extended: true }));
// var database, collection;
connectDB()
const Port = process.env.Port || 4000;


app.get('/', (req ,res)=>{
    res.send('working')
})

app.listen(Port, () => {
    console.log("connect at port "+Port);
    // MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    //     if(error) {
    //         throw error;
    //     }
    //     database = client.db(DATABASE_NAME);
    //     collection = database.collection("data");//database.collection("personnel");
    //     console.log("Connected to `" + DATABASE_NAME + "`!");
    // });
});











// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://dbMuseum:admin@testdb.oijde.mongodb.net/testdb?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     //const collection = client.db("test").collection("devices");

//     const collection = client.db("499").collection("museum");
//     console.log("can connect！")
//     console.log();
//     // perform actions on the collection object
//     client.close();
// });

