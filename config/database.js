const mongoose = require('mongoose');
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true, 

    })
    .then(()=> console.log("database Connection is sucessful"))
    .catch((error)=>{
        console.log("Error in db connection");
        console.error(error.message);
        process.exit(1);
    })
}
module.exports=dbConnect;  