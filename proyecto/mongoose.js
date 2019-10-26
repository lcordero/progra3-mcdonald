
//conectar mongodb
const mongoose = require('mongoose');

 

mongoose.connect('mongodb+srv://isacc:isacc123@cluster0-bwsmj.mongodb.net/test?retryWrites=true&w=majority')
    .then(db => console.log("DB conectada"))
    .catch(err => console.log(err));
    

const Schema = mongoose.Schema;

const tareaShema = new Schema({
    Nombre: String,
    Apellido: String,
    Edad: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tarea', tareaShema); 