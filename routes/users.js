var express = require('express')

var router = express.Router()

router.get('/', (req, res) => {
    res.render('users', {heading : "Users"})
})


router.get('/details/:id', (req, res) => {
    res.send("GET Request For User Details. User" + req.params.id)
})

router.get('/search/:state/:city', (req, res) => {
    res.send("GET Request For User Details. Search By " + req.params.state + req.params.city)
})


router.get('/number-regex/search/:key([0-9]{4})', (req, res) => {
    res.send("GET Request For User Details. Search By " + req.params.key)
})

router.get('/string-regex/search/:key([a-zA-Z]{4})', (req, res) => {
    res.send("GET Request For User Details. Search By " + req.params.key)
})

// router.use('/', (req, res, next => {
//     console.log("API call recieved ")
//     next()
// }))



// wildcards for url error handling


// router.get('*', (req, res) => {
//     res.send("URL NOT FOUND")
// })

router.get('*', (req, res) => {
    var resObj ={
        statusCode : 404,
        statusMessage : "URL NOT FOUND!"
    }

    res.send(resObj)
})


module.exports = router