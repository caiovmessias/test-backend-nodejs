<h1>Candidato: Caio Vinicius Messias</h1>

<h2>Observações</h2>

Após baixar o projeto deve ser executado o seguinte comando:
- npm install

A API foi desenvolvida utilizando o MongoDB portanto será necessário alterar a url de conexão configurada no seguinte caminho do projeto:
\src\database\config.js

Durante o meu desenvolvimento criei uma base local com o nome de "anotaai", a conexão está sendo apontada para ela.

Neste projeto optei por utilizar o padrão MVC pois é um padrão que estou mais familiarizado.

Foram realizados testes manuais com o uso da ferramente Insomnia.

<h2>Instruções/Documentação</h2>

Rotas: 

<h3>Produto(s)</h3>
<strong>POST</strong>: <i>/produto</i> - Realiza o cadastro de um produto
<i>Necessário informar no body via JSON os campos titulo, descricao e preco. Pode ser informado o id_categoria. </i>

<strong>GET</strong>: <i>/produto/:id</i> - Retorna um produto filtrado pelo id
<i>Necessario informar o id do produto via Params na URL</i>

<strong>GET</strong>: <i>/produtos</i> - Retorna todos os produtos cadastrados 
<i>Não é necessario informar parametros ou corpo</i>

<strong>GET</strong>: <i>/produtos/filtro/produto</i> - Retorna os produtos filtrados pelo titulo do produto
<i>Necessario informar no body via JSON o campo titulo</i>

<strong>GET</strong>: <i>/produtos/filtro/categoria</i> - Retorna os produtos filtrados pelo titulo ou id da categoria
<i>Necessario informar no body via JSON o campo titulo da categoria ou id</i>

<strong>PUT</strong>: <i>/produto/:id</i> - Atualiza um produto especifico
<i>Necessario informar o id via Params na URL e os campos que deseja atualizar no corpo via JSON</i>

<strong>PUT</strong>: <i>/produto/categoria/:id</i> - Atualiza a categoria do produto
<i>Necessario informar o id do produto via Params na URL e o id_categoria que deseja atualizar no corpo via JSON</i>

<strong>DEL</strong>: <i>/produto/:id</i> - Realiza a exclusão do produto
<i>Necessario informar o id do produto via Params na URL</i>


<h3>Categoria(s)</h3>
<strong>POST</strong>: <i>/categoria</i> - Realiza o cadastro de uma categoria
<i>Necessário informar no body via JSON o campo titulo </i>

<strong>GET</strong>: <i>/categoria/:id</i> - Retorna uma categoria filtrada pelo id
<i>Necessario informar o id do produto via Params na URL</i>

<strong>GET</strong>: <i>/categorias</i> - Retorna todas as categorias cadastradas
<i>Não é necessario informar parametros ou corpo</i>

<strong>PUT</strong>: <i>/categoria/:id</i> - Atualização da categoria
<i>Necessario informar o id da categoria via Params na URL e os campos que deseja atualizar no corpo via JSON</i>

<strong>DEL</strong>: <i>/categoria/:id</i> - Realiza a exclusão do produto
<i>Necessario informar o id do produto via Params na URL</i>
