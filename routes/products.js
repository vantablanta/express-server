var express = require("express")

var router = express.Router()

router.get('/', (req, res) => {
    res.send("Get All Products")
})

router.get('/product-details', (req, res) =>{
    res.send("Get Product Details ")
})

module.exports = router