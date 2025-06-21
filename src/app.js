const express = require('express');

const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");

//creating signup api.
app.post("/signup", async (req,res) => {

  const userobj = {
    firstName : "Virat",
   lastName : "Kohli",
   emailId : "virat@kohli.com",
   password : "gk1234"


  }  
 

  // Creating a new instance of the User model.
  const user = new User(userobj);
 
   await user.save();
   res.send("User added successfully!!!");

});
   





connectDb()
.then(() =>{
    console.log("Database connected successfully");
    app.listen(3000,() =>{
        console.log("Server is successfully listening on port 3000"); 
     });
    
})
.catch((err) => {
    console.error("Database cannot be connected!!");
});


