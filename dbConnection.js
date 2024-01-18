const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const database = 'Students_Info';
const connection = new MongoClient(url);

async function dbConnect(){
    let result = await connection.connect();
    let db = result.db(database);
    let collection = db.collection('name');
    let response = await collection.find({name:'maha'}).toArray();
    console.log(response);
}
dbConnect();