const router = require("express").Router()
const User = require("../models/users");



//register


router.post("/register", (request, res) => {
    const { email, password } = request.body;

    User.findOne({ email: email }, (user) => {
        if (user) {
            res.status(400).send({ message: "User Already Registered!!!" });
        } else {
            const user = new User({
                email: request.body.email,
          password: request.body.password,
          age : request.body.age,
          gender : request.body.gender ,
          username : request.body.username
            });
            user.save(err => {
                if (err) {
                    console.log(err);
                    res.send(err)
                } else {
                    res.status(200).send({ message: "Successfully Registered!!!" })
                }
            }
            );
        }
    });
});




  


    //login
    router.post("/login", (request, response) => {
        const {password} = request.body;

        // check if email exists
        User.findOne({ email: request.body.email })
      
          // if email exists
          .then((user) => {
            // compare the password entered and the hashed password found
                if(password == user.password){
                    response.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                      });
                }
              // catch error if password does not match
              else{
                response.status(400).send({
                  message: "Passwords does not match",
                });
              };
          })
          // catch error if email does not exist
          .catch((e) => {
            response.status(404).send({
              message: "Email not found",
              e,
            });
          });
      });
            
module.exports = router