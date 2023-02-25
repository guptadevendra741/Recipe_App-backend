const express = require("express");
const dotenv = require("dotenv")
const connectDB = require("./database/connectDb");
const register = require("./routes/register");
const login = require("./routes/login");
const logout = require("./routes/logout");
const search = require("./routes/search");
const recipes = require("./routes/recipe");



const app = express();
dotenv.config()
const cors = require("cors");


const cookieParser = require('cookie-parser')


app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());



app.use("/api", register);
app.use("/api", login);
app.use('/', logout);

app.use(cors());


app.use('/', search);
app.use('/', recipes);



app.listen(process.env.PORT, async () => {
    await connectDB()
    console.log(`App is connected at ${process.env.PORT} port`);
})