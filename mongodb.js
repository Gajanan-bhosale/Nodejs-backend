const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'Students_Info';
const client = new MongoClient(url);

async function dbconnect() {
    let result = await client.connect();
    let db  = result.db(database);
    return db.collection('name');
}

module.exports=dbconnect;