const dbconnect = require('./mongodb');

  const insertData = async ()=>{
    let data = await dbconnect();
    let result = await data.insertMany(
        [
            {name:'anurag', class:8, div:4},
            {name:'pish', class:6, div:5}
        ]
    )
    console.log(result);
}
insertData()