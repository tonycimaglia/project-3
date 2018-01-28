const express = require('express')
const router = express.Router()
const User = require('../db/models/User')
// const PrivateSpace = require('../db/models/PrivateSpace')

router.get('/:userId', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => res.json(user.privateSpace.id(req.params.privateSpaceId)))
        .catch((error) => { console.log(error) })
})

module.exports = router