const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheme = new Schema({
    idPessoa: {
        type: Number,
    },
    titulo: {
        type: String,
    },
    telefone: {
        type: String,
    }
    
})
module.exports = mongoose.model('Ticket', scheme)