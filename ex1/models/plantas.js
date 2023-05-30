var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nomeSchema = new Schema({
    primeiro: String,
    último: String
});

var plantasSchema = new Schema({
    "Id": Number,
    "Número de Registo": Number,
    "Código de rua": Number,
    "Rua": String,
    "Local": String,
    "Freguesia": String,
    "Espécie": String,
    "Nome Científico": String,
    "Origem": String,
    "Data de Plantação": String,
    "Estado": String,
    "Caldeira": String,
    "Tutor": String,
    "Implantação": String,
    "Gestor": String,
    "Data de actualização": String,
    "Número de intervenções": Number
});

module.exports = mongoose.model('plantas', plantasSchema, 'plantas' );