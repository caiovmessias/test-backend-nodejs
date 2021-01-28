const Produto = require('../model/Produto');
const Categoria = require('../model/Categoria');

module.exports = {
  // Criação de um novo produto - Pode ser informado o id_categoria ao criar 
  // o produto ou através de rota especifica 
  async store(req, res) {
    try {
      const data = await Produto.create(req.body);

      return res.json(data);
    } catch (err) {
      return res.status(400).send({ error: 'Cadastro de produto falhou' });
    }
  },

  // Filtra todos os produtos pelo titulo do produto, o titulo é passado via body/json
  async filter_produto(req, res) {
    try {
      const { titulo } = req.body;

      // Expressão necessária para utilizar "like"
      const filtro = new RegExp(titulo, 'i');
      const data = await Produto.find({ titulo: filtro });

      return res.json(data);
    } catch (err) {
      return res.status(400).send({ error: 'Listagem de produto falhou' });
    }
  },

  // Filtragem de produtos pela categoria. Pode ser filtrado usando o id da categoria
  // ou usando o titulo, ambos os campos são informado via body/json
  async filter_categoria(req, res) {
    try {
      const { id, titulo } = req.body;
      let data = null;

      //Se for informado o id
      if (id) {
        data = await Produto.find({ id_categoria: id });
        console.log('Id');
      } else {
        // Se for informado o titulo
        if (titulo) {
          const id_categoria = await Categoria.find({ titulo }, '_id');
          console.log(id_categoria);
          data = await Produto.find({ id_categoria: id_categoria._id });
        }
      }

      // Caso seja informado um campo diferente de id ou titulo
      if (data === null) {
        return res.status(400).send({ error: 'Listagem de produto falhou' })
      } else {
        return res.json(data);
      }
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: 'Listagem de produto falhou' });
    }
  },

  // Listagem de todos os produtos sem filtros
  async index(req, res) {
    try {
      const data = await Produto.find({});

      return res.json(data);
    } catch (err) {
      return res.status(400).send({ error: 'Listagem de produto falhou' });
    }
  },

  // Atualização de qualquer campo do produto - pode ser usado para atualizar o id_categoria
  async update(req, res) {
    try {
      const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      return res.send({ produto });
    } catch (err) {
      return res.status(400).send({ error: 'Atualização de produto falhou' });
    }
  },

  // Rota especifica para atualização do campo id_categoria dos produtos
  async update_categoria(req, res) {
    try {
      const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      return res.send({ produto });
    } catch (err) {
      return res.status(400).send({ error: 'Atualização de produto falhou' });
    }
  },

  // Exclusão de produto
  async delete(req, res) {
    try {
      await Produto.findByIdAndRemove(req.params.id);

      return res.send();
    } catch (err) {
      return res.status(400).send({ error: 'Exclusão de produto falhou' });
    }
  },
};
