const express = require('express');
const app = express();

app.get("/user",(req,res)=>{
    res.send({firstName:"Ganesh" , lastName:"upadhyay"});
});


app.post("/user",(req,res)=>{
    //logic to save data to databse.
    res.send("Data is saved to database");
});

app.delete("/user",(req,res)=>{
    res.send("User deleted");
})

app.use("/hello",(req,res)=>{
    res.send("hello hello hello hello ");
})

app.use("/test",(req,res)=>{
    res.send("hello from test");
})





app.listen(3000,()=>{
    console.log("successfully running the server ");
});