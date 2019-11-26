const Menu = require('../models/menu')

//Carga el html
function getmenu (req, res) {
    Menu.find({}, (err, menus) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!menus) return res.status(404).send({message: 'No existen productos'})
  
      res.send(200, { menus })
    })
  }


  
module.exports = {
    getmenu,
  }
  
