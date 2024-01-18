//const http = require('http'); 

// const dbconnect = require("./mongodb")

// http.createServer((req,resp)=>{
//     resp.write("hello this is --");
//     resp.end();
// }).listen(4500);

// const http = require('http');
// const data = require('./data');

// http.createServer((req,resp) =>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(4500);

// const http = require('http');
// const data = require('./data')

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'applicatiom\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);

// https://www.toptal.com/nodejs/secure-rest-api-in-nodejs

// const {MongoClient} = require('mongodb');
// const url='mongodb://localhost:27017';
// const databasename='e-comm';
// const client = new MongoClient(url);

// async function dbconnect(){
//     let result = await client.connect();
//     db = result.db(databasename);
//     return db.collection('products');
// }

// module.exports = dbconnect;

// const http = require('http');

// http.createServer  ((req,resp) =>{
//     resp.writeHead(200,{'Content-Type':'application/json'});
//     resp.write(JSON.stringify({name:'gajanan',college:'Sinhgad College Of Enginnering',number:'9013442',email:'gajananbhosale@gmail.com'}))
//     resp.end();
// }).listen(4500);

// const http = require('http');

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application/json'})
//     resp.write(JSON.stringify({name:'this is node js'}))
//     resp.end()
// }).listen(4000);

// 

// 
// const express = require('express');
// const app = express();
// const reqFilter = require('./middleware')

// app.use(reqFilter);

// app.get('',(req,res)=>{
//     res.send('this is the user page');
//     console.log('user page viewed');
//     res.send('welconmw to this page');
// })

// app.get('/login',(req,res)=>{
//     res.send('please login to youur account');
// })

// app.listen(4000);

// const express = require('express');
// const app = express();
// const route = express.Router();

// const reqFilter = (req,res,next) =>{
//     if(!req.query.age){
//         res.send('please first provide your age');
//     }
//     else if(req.query.age<18){
//         res.send('you can visit this page');
//     }
//     else{
//         next();
//     }
// }

// //app.use(reqFilter);
// route.use(reqFilter)

// app.get('',(req,res) =>{
//     res.send("this is my first page");
// })

// route.get('/login',(req,res) =>{
//     res.send("this is the login page")
// })

// app.get('/aboutus',(req,res)=>{
//     res.send('this is the about us page');
// })
// app.use('/',route);

// app.listen(4500);

// const express = require('express');
// const app = express();

// const requestTime = (req,res,next)=> {
//     req.requestTime = Date.now();
//     next();
// }

// app.use(requestTime);

// app.get('/',(req,res)=>{
//     let responseText = 'Hello World!<br>'
//     responseText += `<small>Requested at: ${req.requestTime}</small>`
//     res.send(responseText)
// })

// app.listen(3000);

// const express = require('express');
// const app = express();

// app.get('',(req,res)=>{
//     let responseText='Welcome to my website!<br>'
//     responseText += `<small>this is the first page of the website</small>`
//     res.send(responseText);
// })
// app.listen(3000);

// const {MongoClient} = require('mongodb');
// const url  = 'mongodb://localhost:27017';
// const database = 'Students_Info';
// const connection = new MongoClient(url);

// async function getData()
// {
//     let result = await connection.connect();
//     let db = result.db(database);
//     let collection = db.collection('name');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }
// getData();



// const{MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database  = 'Students_Info';
// const dbconnection = new MongoClient(url);

// async function dbconnect(){
//     let result = await dbconnection.connect();
//     let db = result.db(database);
//     let collection = db.collection('name');
//     let response = await collection.find({name:'gajju'}).toArray();
//     console.log(response); 
// }

// dbconnect();

// const main = async()=>{
//     let data = await dbconnect();
//     data = await  data.find().toArray();
//     console.log(data);
// }

// main();

// const express = require('express');
// const app = express();
// const route = express.Router();

// const reqFilter = (req,res,next) =>{
//     if(!req.query.email){
//         res.send("please provide your email address");
//     }
//     else if(req.query.email !== userid){
//         res.send("please provide valid email.id");
//     }
//     else {
//         next();
//     }
// }

// route.use(reqFilter);

// route.get('',(req,res)=>{
//     res.send("please provide");
// })

// app.get('/about',(req,res)=>{
//     res.send("this is the about page");
// })

// route.get('/apple',(req,res)=>{
//     res.send("this is apply page , first provide email to apply for");
// })
// app.use('/',route);

// app.listen(4000);

// const dbconnect = require('./mongodb');

//   const insertData = async ()=>{
//     let data = await dbconnect();
//     let result = await data.insertMany(
//         [
//             {name:'anurag', class:8, div:4},
//             {name:'pish', class:6, div:5}
//         ]
//     )
//     console.log(result);
// }
// insertData()

// const deleteData = async () =>{
//     let data = await dbconnect();
//     let result = await data.deleteMany({name:'anurag',name:'pish'});
//     console.log(result);
// }

// deleteData();

// const updateData = async () =>{
//     const data = await dbconnect();
//     const result = await data.updateOne(
//         {name:'gajju'},{
//             $set:{class:3}
//         }
//     )
// }

// updateData();


const express = require('express');
const mongodb = require('mongodb');
const app = express();
const dbconnect = require('./mongodb');

app.use(express.json());

// app.get('/',async(req,res)=>{
//     let data = await dbconnect();
//     data = await data.find().toArray();
//     console.log(data);
//     res.send(data)
// })

app.get('/',async(req,res)=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    res.send(data);
    console.log(data)
})

app.post('/post',async(req,res)=>{
    let data = await dbconnect();
    let result = await data.insertOne(req.body);
    res.send(result);
})

app.put('/:name',async(req,res)=>{
    let data = await dbconnect();
    let result = await data.updateOne(
        {name: req.params.name},
        {$set: req.body}
    )
    res.send({status:'updated'})
})
app.delete('/:id',async(req,res)=>{
    let data = await dbconnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result);

})
app.listen(4000);


