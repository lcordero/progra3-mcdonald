'use strict'

const Admin = require('../models/admin')


function getAdmin (req, res) {
  let adminId = req.params.adminId

  Admin.findById(adminId, (err, admin) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!admin) return res.status(404).send({message: `El menu no existe`})

    res.status(200).send({ admin })
  })
}

function getAdmins (req, res) {
  Admin.find({}, (err, admins) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!admins) return res.status(404).send({message: 'No existen menus'})

    res.send(200, { admins })
  })
}

function saveAdmin (req, res) {
  console.log('POST /api/admin')
  console.log("req.body")
  console.log(req.body)

  let admin = new Admin()
  admin.combo = req.body.combo
  admin.bebida = req.body.bebida
  admin.acompanamiento = req.body.acompanamiento

  admin.save((err, adminTienda) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})

    res.status(200).send({ admin: adminTienda })
  })
}

function updateAdmin (req, res) {
  let adminId = req.params.admintId
  let update = req.body

  Admin.findByIdAndUpdate(adminId, update, (err, adminUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el menu: ${err}`})

    res.status(200).send({ admin: adminUpdated })
  })
}

function deleteAdmin (req, res) {
  let adminId = req.params.adminId
  console.log(adminId)
  Admin.findById(adminId, (err, admin) => {
    if (err) res.status(500).send({message: `Error al borrar el menu: ${err}`})

    admin.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el menu: ${err}`})
      res.status(200).send({message: 'El menu ha sido eliminado'})
    })
  })
}

module.exports = {
  getAdmin,
  getAdmins,
  saveAdmin,
  updateAdmin,
  deleteAdmin
}