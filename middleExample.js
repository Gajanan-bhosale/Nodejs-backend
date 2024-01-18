const express = require('express');
const app = express();

const reqFilter = (req,res,next) =>{
    if(!req.query.age){
        res.send('Please provide your age');
    }
    else if(req.query.age<18){
        res.send("ypu can visite to this page");
    }
    else{
        next();
    }
}

app.use(reqFilter);

app.get('/login',(req,res) =>{
    res.send("this is the login page")
})

app.get('/first',(req,res) =>{
    res.send("this is the login page")
})
app.get('/aboutus',(req,res) =>{
    res.send("this is the login page")
})
app.listen(4000);