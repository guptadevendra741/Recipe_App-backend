const mongoose = require("mongoose")

mongoose.set("strictQuery", false)
const connectDB = ()=>{
    mongoose.connect("mongodb+srv://recipe_app:iQMMDnHHq7uKxDNX@cluster0.9temrwa.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("Database is connected");
    })
}

module.exports = connectDB;