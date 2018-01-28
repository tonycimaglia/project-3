const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../db/models/User')

router.get('/', (req, res) => {
    const userId = req.params.userId
    User.findById(userId)
    .then((user) => {
        res.json(user.privateSpaces)
    })
    .catch((error) => console.log(error))
})

module.exports = router