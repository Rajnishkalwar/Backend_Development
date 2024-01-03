const express=require('express');
const app=express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;
//middleware to parse json body
app.use(express.json());
// import routes 
const todoRoutes = require("./routes/todos")
//mounting the todo api routes
app.use("/api/v1",todoRoutes);
// start server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
})
//connect db
const dbConnect=require("./config/database")
dbConnect();
app.get("/",(req,res)=>{
    res.send(`<h1> This is Homepage abby </h1>`)
})



