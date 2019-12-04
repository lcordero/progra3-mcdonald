const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const app = express();
const api = require('./routes');
const path = require('path');
const morgan = require('morgan');
const viewsPath = path.join(__dirname+'/views/')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'html')


app.use('/assets', [
    express.static(__dirname + '/node_modules/jquery/dist/'),
    express.static(__dirname + '/node_modules/socket.io-client/dist/')
  ]);


// morgan esta nos muestra que se esta ejecuntando en la consola 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// ruta
app.use('/api', api)
app.get('/addorden', (req, res) => {
  res.sendFile(path.join(viewsPath+'addorden.html'));
})
app.get('/opciones', (req, res) => {
    res.sendFile(path.join(viewsPath+'opciones.html'));
  })
app.get('/chooseorden', (req, res) => {
    res.sendFile(path.join(viewsPath+'chooseorden.html'));
  })
app.get('/cocina', (req, res) => {
    res.sendFile(path.join(viewsPath+'cocina.html'));
  })
app.get('/nosotros', (req, res) => {
    res.sendFile(path.join(viewsPath+'nosotros.html'));
  })


  // iniciando en servidor
  // app.listen(app.get('port'), () => {
  //    console.log(`Server on port ${app.get('port')}`);
  // });

module.exports = app