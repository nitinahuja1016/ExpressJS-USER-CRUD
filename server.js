const express = require("express");
const errorHandler = require("./middleware/errorHandle.js");
const connectDb = require("./config/dbConnection.js");
const app = express()
const dotvet = require("dotenv").config();


const port = process.env.PORT

connectDb();
app.use(express.json())
app.use("/api/users",require("./routes/userRoutes.js"));
app.use(errorHandler)

app.listen(port, ()=> 
console.log(`server running is on port ${port}`))