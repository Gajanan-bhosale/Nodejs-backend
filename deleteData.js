const dbconnect = require('./mongodb');

const deleteData = async () =>{
    let data = await dbconnect();
    let result = await data.deleteMany({name:'anurag'});
    console.log(result);
}

deleteData();