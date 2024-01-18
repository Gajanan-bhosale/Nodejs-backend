module.exports = reqFilter = (req,res,next) =>{
    if(!req.query.name){
        res.send("please provide your name");
    }
    else if(req.query.name!='gajnana'){
        res.send('you can not view this page');
    }
    else{
        next();
    }
}