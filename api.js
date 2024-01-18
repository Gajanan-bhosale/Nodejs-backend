const express = require('express');
const mongodb = require('mongodb');
const dbconnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data)

});
app.post('/post', async (req, res) => {
    let data = await dbconnect();
    let result = await data.insertOne(req.body);
    res.send(result)

})
app.post('/postapi', async (req, resp) => {
    //console.log(req.body);
    let data = await dbconnect();
    data = await data.insertOne(req.body);
    resp.send(data);
})

// app.put('/:name',async (req,res) =>{
//     const data = await dbconnect();
//     let result = await data.updateOne(
//         {name: req.params.name},
//         {$set: req.body}
//     )
//     res.send({status :'updated'})

// })

app.put('/:name', async (req, res) => {
    const data = await dbconnect();
    let result = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    res.send({ status: "updated" })
})


app.delete('/:id', async (req, res) => {
    const data = await dbconnect();
    const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    console.log(result);
    res.send('done');
})
app.listen(5000);