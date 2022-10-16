const router = require("express").Router()
const { User } = require("../models/users");
const cloudinary = require("../cloudinary")

//register
router.post("/register",async (req,res) => {
    const {email} = req.body;
    console.log(req.body)

    const newUser = new User({ ...req.body });
    const allUsers = await User.find();

    const specUser = allUsers.find(user => user.email === email)
    if(specUser){
        res.status(400).json({msg: "Email already exist"})
    }
    else{    const insertedUser = await newUser.save();
        console.log(insertedUser)

        return res.status(201).json(insertedUser);
    }
    })



    //login
    router.post("/login",async (req,res) => {
        const {email,img} = req.body;
        cloudinary.v2.uploader.upload(img,
        { 
            
         });



        const allUsers = await User.find();
    
        const specUser = allUsers.find(user => user.email === email)
        if(specUser){
            console.log(req.body)
            return res.status(201).json(specUser);

        }
        else{   
            console.log("not found")
            res.status(404).json({msg: "Email doesn't exist "})
        }
        })
    

module.exports = router