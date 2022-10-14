const express = require("express");
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.Port


app.get("/",(req,res) => {
    res.send("<h1>this is our site</h1>")
})


app.listen(PORT, () => {
    console.log(`our server is running on port ${PORT}`);
})