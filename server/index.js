const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json())

const userRoutes = require("./routes/quiz")
app.use("/api/v1",userRoutes);

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})

const dbConnect = require("./config/database");
 dbConnect();

 app.get("/",(req,res)=>{
    res.send("<h1>This is Homepage<h1>");
 })