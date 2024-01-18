const express = require('express');
const app = express();
const route = express.Router();

const reqFilter = (req,res,next) =>{
    if(!req.query.age){
        res.send('please first provide your age');
    }
    else if(req.query.age<18){
        res.send('you can visit this page');
    }
    else{
        next();
    }
}


route.use(reqFilter)

app.get('',(req,res) =>{
    res.send("this is my first page");
})

route.get('/login',(req,res) =>{
    res.send("this is the login page")
})

app.get('/aboutus',(req,res)=>{
    res.send('this is the about us page');
})
app.use('/',route);

app.listen(4500);