const express = require('express');
const app = express();

const{ adminAuth } =  require("./middleware/auth");



//handle Auth Middleware for all request GET,POST ,PUT and DELETE
app.use("/admin",adminAuth);



app.get("/admin/getAllData",(req,res)=>{

    res.send("All Data Sent ");
});


app.get("/admin/deleteUser",(req,res)=>{
    res.send("deleted  a user");
});

app.post("/user/login",(req,res)=>{
    res.send("user logged in successfully");
})
app.listen(3000,()=>{
    console.log("successfully running the server ");
});