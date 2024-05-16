// const mongoose=require("mongoose")
// const {DB_NAME} =require("./constants.js")
require("dotenv").config
const connectDB=require("../src/Db/index.js")
connectDB()











/*
const express=require("express")
const app=express();
;(async ()=>{
     try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
app.on("error",(error)=>{
    console.log("Err:",error);
    throw error
})
app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log(`Server is up and running on the port ${process.env.PORT}`)
    }
})
     }catch(error){
        console.log("Error:",error)
        throw err
     }
})()
*/