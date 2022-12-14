const express = require("express");
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.Port
const MONGO = process.env.Mongo

//fas
mongoose
 .connect(MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 })
 .then((db) => console.log("db is connected"))
 .catch((err) => console.log(err));

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended: true}));

const auth = require("./routes/auth")
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

app.use("/",auth)
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);









app.listen(PORT, () => {
    console.log(`our server is running on port ${PORT}`);
})