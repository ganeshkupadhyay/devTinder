const express = require('express');

const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");


 // this is a middleware provided by express itself
app.use(express.json());

//creating signup api.
app.post("/signup", async (req,res) => {

  console.log(req.body); // ab ye request.body userobj  ke jaisa hi same hai , to jahan main new User me userobj pass krta tha wahan main , ab directly 
  // ye req.body hi pass kar dunga .

  // const userobj = {
  //   firstName : "Virat",
  //  lastName : "Kohli",
  //  emailId : "virat@kohli.com",
  //  password : "gk1234"


  // }  
 

  // // Creating a new instance of the User model.
  // const user = new User(userobj);

  const user = new User(req.body);
  await user.save();
  res.send("User added successfully!!!");
 
  //  await user.save();
  //  res.send("User added successfully!!!");

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


