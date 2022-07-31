var express = require("express")

var router = express.Router()

router.get('/', (req, res) => {
    res.send("Get All Orders")
})

router.get('/order-details', (req, res) =>{
    res.send("Get Order Details ")
})

module.exports = router