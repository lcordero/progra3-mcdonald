'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = Schema({
    combo: String,
    bebida: String,
    acompanamiento: String
})

module.exports = mongoose.model('Admin', AdminSchema)