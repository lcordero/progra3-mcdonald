'use strict'

const express = require('express')
const OrdenCtrl = require('../controllers/menu1')
const api = express.Router()

api.get('/orden', OrdenCtrl.getOrdenes)
api.get('/orden/:ordenId', OrdenCtrl.getOrden)
api.post('/orden', OrdenCtrl.saveOrden)
api.put('/orden/:ordenId', OrdenCtrl.updateOrden)
api.delete('/orden/:ordenId', OrdenCtrl.deleteOrden)

module.exports = api