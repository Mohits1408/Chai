const mongoose=require("mongoose");
require("dotenv").config()
const {DB_NAME}=require("../constants.js")
const connectDB= async()=>{
try{
    const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`
    )
console.log(`/n MongoDB connected !!  Db host :${connectionInstance.connection.host}`)
}catch(error){
    console.log("MongoDB connection error:",error)
    process.exit(1)

}
}
module.exports=connectDB