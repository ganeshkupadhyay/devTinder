const express = require('express');
const app = express();



app.use("/hello",(req,res)=>{
    res.send("hello hello hello hello ");
})

app.use("/test",(req,res)=>{
    res.send("hello from test");
})


app.use((req,res)=> {

    res.send("Hello from the server");

})




app.listen(3000,()=>{
    console.log("successfully running the server ");
});