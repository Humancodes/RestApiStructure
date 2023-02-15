const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/olympics",
{useNewUrlParser:true}).then(()=>{
    console.log("Connection Sucessfull")
}).catch((e)=>{
    console.log("Connection Failed");
})












