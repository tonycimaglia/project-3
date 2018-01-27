const express = require('express')
const router = express.Router()
const User = require('../db/models/User')
// const PrivateSpace = require('../db/models/PrivateSpace')

router.get('/', (request, response) => {
    const userId = request.params.userId
    User.findById(userId)
        .then((user) => {
            response.json(user)
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router