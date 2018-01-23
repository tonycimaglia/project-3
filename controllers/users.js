const express = require('express')
const router = express.Router()
const User = require('../db/models/User')

router.get('/', (req, res) => {
  User.find().then(users => {
    res.json(users)
  })
  .catch((err) => console.log(err))
})

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({}) // create a new Idea, let Mongoose give the default values
    res.json(newUser) // Send this new idea back to the client
  } catch (error) {
    console.log(error)
    res.sendStatus(500) // If there is any error, tell the client something went wrong on the server
  }
})

module.exports = router

