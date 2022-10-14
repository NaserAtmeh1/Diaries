const router = require("express").Router()
const { User } = require("../models/users");



router.post("/signup",async (req,res) => {
    const {username,email,password} = req.body;

    const newUser = new User({ ...req.body });
    const allUsers = await User.find();
    const insertedUser = await newUser.save();

    const specUser = allUsers.find(user => user.email === email)
    if(specUser){
        res.status(400).json({msg: "Email already exist"})
    }
    else{ return res.status(201).json(insertedUser);
    }
    })

module.exports = router