const mongoose = require('mongoose');
const ticket = require('./ticket');
const Schema = mongoose.Schema;
const scheme = new Schema({
    ticket: {
        idPessoa: {
            type: Number,
        },
        titulo: {
            type: Number,
        },
        telefone: {
            type: String,
        },
    },
    historico: {
        type: String,
    },
    idAtendente: {
        type: Number,
    },
    motivos: {
        type: String,
    }


})
module.exports = mongoose.model('Registro', scheme)