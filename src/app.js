const express = require('express');
const app = express();

app.get("/user",(req,res)=>{
    res.send({firstName:"Ganesh" , lastName:"upadhyay"});
});


app.post("/user",(req,res,next)=>{
    //logic to save data to databse.
    console.log("1st route handler with no response");
    next();
},

(req,res,next)=>{
    console.log("2nd route handler with no response");
    next();
},

(req,res,next)=>{
    console.log("3rd route handler with no response");
    next();
},

(req, res,next)=>{
    res.send("finally found the response in 4th route handler");
}






);

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