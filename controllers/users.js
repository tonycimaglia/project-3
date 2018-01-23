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

module.exports = router

