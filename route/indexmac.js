'use strict'

const express = require('express')
const OrdenCtrl = require('../controllers/menu')
const api = express.Router()

api.get('/product', OrdenCtrl.getOrdenes)
api.get('/product/:productId', OrdenCtrl.getOrden)
api.post('/product', OrdenCtrl.saveOrden)
api.put('/product/:productId', OrdenCtrl.updateOrden)
api.delete('/product/:productId', OrdenCtrl.deleteOrden)

module.exports = api