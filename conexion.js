var express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = process.env.PORT || 3000;
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'index.html');
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});



var mongoose = require('mongoose');

var Base_de_Mongo_Macdonald = "mongodb+srv://alonso-v:<Sito1199>@cluster0-hunby.mongodb.net/practica?retryWrites=true&w=majority"
mongoose.connect(Base_de_Mongo_Macdonald, (err) => {
    console.log('Conectandose a la Base de Mongo de Macdonald', err);
})


var Ordenes = mongoose.model('macdonald', { Numero_Orden: Integer, Plato: String, Bebida: String, Cantidad: Integer, Observaciones: String, Precio: Integer })

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/macdonald', (req, res) => {
    Ordenes.find({}, (err, Ordenes) => {
        res.send(Ordenes);
    })
})


app.post('/macdonald', (req, res) => {
    var orden = new Ordenes(req.body);
    orden.save((err) => {
        if (err)
            sendStatus(500);
        res.sendStatus(200);
    })
    
})