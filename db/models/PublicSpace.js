const mongoose = require('mongoose')
const Schema = require('../schema')

const PublicSpace = mongoose.model('PublicSpace', Schema.PublicSpaceSchema)

module.exports = PublicSpace