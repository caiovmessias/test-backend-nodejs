const Categoria = require('../model/Categoria');

module.exports = {
  // Criação de uma nova categoria
  async store(req, res) {
    try {
      const data = await Categoria.create(req.body);

      return res.json(data);
    } catch (err) {
      return res.status(400).send({ error: 'Criação de categoria falhou' });
    }
  },

  // Listagem de todas as categorias
  async index(req, res) {
    try {
      const data = await Categoria.find({});

      return res.json(data);
    } catch (err) {
      return res.status(400).send({ error: 'Listagem de categorias falhou' });
    }
  },

  // Atualização de categoria pelo id
  async update(req, res) {
    try {
      const categoria = await Categoria.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      return res.send({ categoria });
    } catch (err) {
      return res.status(400).send({ error: 'Atualização de categoria falhou' });
    }
  },

  //Exclusão de categoria pelo id
  async delete(req, res) {
    try {
      await Categoria.findByIdAndRemove(req.params.id);

      return res.send();
    } catch (err) {
      return res.status(400).send({ error: 'Exclusão de categoria falhou' });
    }
  },
};
