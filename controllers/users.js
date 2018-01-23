const express = require('express')
const router = express.Router()
const User = require('../db/models/User')

router.get('/', (req, res) => {
  User.find().then(users => {
    res.json(users)
  })
    .catch((err) => console.log(err))
})

router.post('/', (req, res) => {

  console.log(req.body)
  const newUser = new User(req.body)
  newUser
      .save()
      .then((user) => {
          res.json(user)
      })
      .catch((error) => console.log(error))
})

router.delete('/:userId', async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.userId) // Delete the idea from the database
    res.sendStatus(200) // Send back a status of 200 to tell the client that the delete was successful
  } catch (error) {
    console.log(error)
    res.sendStatus(500) // If there is any error, tell the client something went wrong on the server
  }
})

module.exports = router

