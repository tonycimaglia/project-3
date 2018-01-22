const mongoose = require('mongoose')
const Schema = require('../schema')

const PrivateSpace = mongoose.model('PrivateSpace', Schema.PrivateSpaceSchema)

module.exports = PrivateSpace