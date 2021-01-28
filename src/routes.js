const express = require('express');
const ProdutoController = require('./app/controller/ProdutoController');
const CategoriaController = require('./app/controller/CategoriaController');

const routes = express.Router();

// Model - Produto
routes.post('/produto', ProdutoController.store); // Criação de um novo produto
routes.get('/produtos', ProdutoController.index_all); // Listagem de todos os produtos
routes.get('/produto/:id', ProdutoController.index); // Listagem de um produto especifico
routes.get('/produtos/filtro/produto', ProdutoController.filter_produto); // Filtro por titulo produto
routes.get('/produtos/filtro/categoria', ProdutoController.filter_categoria); //Filtro por titulo ou id categoria
routes.put('/produto/:id', ProdutoController.update); // Atualização do produto
routes.put('/produto/categoria/:id', ProdutoController.update_categoria); // Atualização da categoria do produto
routes.delete('/produto/:id', ProdutoController.delete); // Exclusão do produto

// Model - Categoria
routes.post('/categoria', CategoriaController.store); // Criação de uma categoria
routes.get('/categorias', CategoriaController.index_all); //Listagem de todas as categorias
routes.get('/categoria/:id', CategoriaController.index); //Listagem de todas as categorias
routes.put('/categoria/:id', CategoriaController.update); // Atualização do titulo da categoria
routes.delete('/categoria/:id', CategoriaController.delete); // Exclusão da categoria

module.exports = routes;
