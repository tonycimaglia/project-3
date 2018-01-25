const express = require('express')
const router = express.Router()
const PublicSpace = require('../db/models/PublicSpace')

router.get('/', (req, res) => {
    PublicSpace.find().then(publicSpaces => {
        res.json(publicSpaces)
    })
        .catch((err) => console.log(err))
})

module.exports = router