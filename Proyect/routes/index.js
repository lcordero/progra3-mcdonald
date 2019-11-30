'use strict'

const express = require('express')
const NuevoMenuCtrl = require('../controllers/NuevoMenu')
const api = express.Router()


// rutas de agregar NuevoMenu
api.get('/menu', NuevoMenuCtrl.getNuevoMenus)
api.get('/menu/:NuevoMenuId', NuevoMenuCtrl.getNuevoMenu)
api.post('/menu', NuevoMenuCtrl.saveNuevoMenu)
api.put('/menu/:NuevoMenuId', NuevoMenuCtrl.updateNuevoMenu)
api.delete('/menu/:NuevoMenuId', NuevoMenuCtrl.deleteNuevoMenu)

module.exports = api
