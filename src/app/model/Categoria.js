const mongoose = require('../../database/config');

const categoriaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
});

const Categoria = mongoose.model('categorias', categoriaSchema);

module.exports = Categoria;
