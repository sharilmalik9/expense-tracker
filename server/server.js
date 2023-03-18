import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const PORT=4000;
const app=express();
app.use(cors);
 await mongoose.connect("mongodb+srv://sharilmalik78:sharilbebest9@expense-tracker.hxsm0cg.mongodb.net/?retryWrites=true&w=majority"
)
console.log("connection done");
app.get("/",(req,res)=>{
    res.send("hello world");
}
)
app.listen(PORT,()=>{
    console.log('server : ' , PORT);
})