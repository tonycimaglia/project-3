const express = require('express')
const router = express.Router()
const User = require('../db/models/User')
// const PrivateSpace = require('../db/models/PrivateSpace')

router.get('/', (req, res) => {
    const userId = req.params.userId
    User.findById(userId)
    .then((user) => {
        res.json(user.privateSpaces)
    })
    .catch((error) => console.log(error))
})

module.exports = router