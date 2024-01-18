const dbconnect = require('./mongodb');

const updateData = async () =>{
    const data = await dbconnect();
    const result = await data.updateOne(
        {name:'gajju'},{
            $set:{class:3}
        }
    )
}

updateData();