const express = require('express')
const menuCtrl = require('../controllers/menu')
const NuevoMenuCtrl = require('../controllers/NuevoMenu')
const api = express.Router()

api.get('/menu', menuCtrl.getmenu)





// rutas de agregar NuevoMenu
api.get('/menu', NuevoMenuCtrl.getNuevoMenus)
api.get('/menu/:NuevoMenuId', NuevoMenuCtrl.getNuevoMenu)
api.post('/menu', NuevoMenuCtrl.saveNuevoMenu)
api.put('/menu/:NuevoMenuId', NuevoMenuCtrl.updateNuevoMenu)
api.delete('/menu/:NuevoMenuId', NuevoMenuCtrl.deleteNuevoMenu)



module.exports = api