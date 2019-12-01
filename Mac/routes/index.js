const express = require('express')
const menuCtrl = require('../controllers/menu')
const adminCtrl = require('../controllers/admin')
const api = express.Router()

api.get('/menu', menuCtrl.getmenu)





// rutas de agregar Admin
api.get('/admin', adminCtrl.getAdmins)
api.get('/admin/:adminId', adminCtrl.getAdmin)
api.post('/admin', adminCtrl.saveAdmin)
api.put('/admin/:adminId', adminCtrl.updateAdmin)
api.delete('/admin/:adminId', adminCtrl.deleteAdmin)



module.exports = api