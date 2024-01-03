const express=require('express');
const router=express.Router();

//controller export
const {createTodo}= require("../controllers/createTodo");
router.post('/createTodo',createTodo);
module.exports=router; 
