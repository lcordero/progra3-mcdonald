const express = require('express')
const menuCtrl = require('../controllers/menu')

const api = express.Router()

api.get('/menu', menuCtrl.getmenu)



module.exports = api