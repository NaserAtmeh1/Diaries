const router = require("express").Router()
const { User } = require("../models/users");
const cloudinary = require("../cloudinary")


router.post("/signup",async (req,res) => {
    const {username,email,password} = req.body;

    const newUser = new User({ ...req.body });
    const allUsers = await User.find();

    const specUser = allUsers.find(user => user.email === email)
    if(specUser){
        res.status(400).json({msg: "Email already exist"})
    }
    else{    const insertedUser = await newUser.save();
 
        return res.status(201).json(insertedUser);
    }
    })

module.exports = router