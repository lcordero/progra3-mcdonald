const mongoose = require('mongoose');
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