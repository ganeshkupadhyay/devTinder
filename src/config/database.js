const mongoose = require("mongoose");

const connectDb = async () =>
{
    await mongoose.connect("mongodb+srv://ganeshbossmjrp:gk1234@users.mzla2jt.mongodb.net/?retryWrites=true&w=majority&appName=Users");

};

module.exports = connectDb;

connectDb()
.then(() => {
    console.log("Database connected successfully");

})
.catch((err) => {
    console.error("Database connot be connected!!");
});

