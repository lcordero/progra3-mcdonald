'use strict'

const express = require('express')
const menuCtrl = require('../controllers/menu')

const adminCtrl = require('../controllers/admin')

const OrdenCtrl = require('../controllers/menu1')
const api = express.Router()

// rutas menu
api.get('/menu', menuCtrl.getmenu)

api.get('/orden', OrdenCtrl.getOrdenes)
api.get('/orden/:ordenId', OrdenCtrl.getOrden)
api.post('/orden', OrdenCtrl.saveOrden)
api.put('/orden/:ordenId', OrdenCtrl.updateOrden)
api.delete('/orden/:ordenId', OrdenCtrl.deleteOrden)


// rutas de agregar Admin
api.get('/admin', adminCtrl.getAdmins)
api.get('/admin/:adminId', adminCtrl.getAdmin)
api.post('/admin', adminCtrl.saveAdmin)
api.put('/admin/:adminId', adminCtrl.updateAdmin)
api.delete('/admin/:adminId', adminCtrl.deleteAdmin)



module.exports = api
