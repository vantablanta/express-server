var express = require('express')

var router = express.Router()

router.get('/', (req, res) => {
    res.send("GET Request For Users")
})


router.get('/details', (req, res) => {
    res.send("GET Request For User Details")
})


module.exports = router