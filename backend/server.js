const express = require("express");
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.Port
const MONGO = process.env.Mongo
const auth = require("./routes/auth")

app.use(express.json())
app.use("/auth",auth)







mongoose
 .connect(MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then((db) => console.log("db is connected"))
 .catch((err) => console.log(err));


 app.get("/",(req,res) => {
    res.send("<h1>this is our site</h1>")
})


app.listen(PORT, () => {
    console.log(`our server is running on port ${PORT}`);
})