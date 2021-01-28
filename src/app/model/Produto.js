const mongoose = require('../../database/config');

const produtoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  id_categoria: {
    type: String,
    required: false,
  },
});

const Produto = mongoose.model('produtos', produtoSchema);

module.exports = Produto;
