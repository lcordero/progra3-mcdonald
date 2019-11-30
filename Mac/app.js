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

app.use('/api', api)
// ruta
app.get('/menu', (req, res) => {
    res.sendFile(path.join(viewsPath+'menu.html'));
  })
app.get('/menu2', (req, res) => {
    res.sendFile(path.join(viewsPath+'menu2.html'));
  })
app.get('/menu3', (req, res) => {
    res.sendFile(path.join(viewsPath+'menu3.html'));
  })
app.get('/menu4', (req, res) => {
    res.sendFile(path.join(viewsPath+'menu4.html'));
  })
  app.get('/NuevoMenu', (req, res) => {
    res.sendFile(path.join(viewsPath+'NuevoMenu.html'));
  })

//   iniciando en servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

module.exports = app