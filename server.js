const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("Server sucessfully started at server 3000");
});
const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hello Everyone");
})
app.post('/api/cars',(req,res)=>{
    const{name,brand}= req.body;
    console.log(name);
    console.log(brand);
    res.send("Data submited sucessfully");
})

