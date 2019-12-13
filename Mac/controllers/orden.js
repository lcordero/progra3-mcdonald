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
  module.exports = {
    getAdmin,
    getAdmins
  }