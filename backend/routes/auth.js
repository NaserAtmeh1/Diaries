const router = require("express").Router()

router.get("/",(req,res) => {
    res.send("auth is working")
})

module.exports = router