const express = require('express')
const router = express.Router()
const PrivateSpace = require('../db/models/PrivateSpace')

router.get('/', (request, response) => {
    const userId = request.params.userId
    PrivateSpace.findById(privateSpaceId)
        .then((garden) => {
            response.json(privateSpace)
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router