const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
        ssl: { rejectUnauthorized: false }
    }
});

// Incluir um produto
let addProducts = (req, res) => {
    knex('produto')
        .insert({ descricao: req.body.descricao, valor: req.body.valor, marca: req.body.marca }, ['id', 'descricao', 'valor', 'marca'])
        .then(n => {
            if (n.length) {
                res.status(200).json({ message: 'Produto incluido com sucesso' })
            }
            else {
                res.status(404).json({ message: 'Produto nao encontrado' })
            }

        });
};

// Obter a lista de produtos
let getProducts = (req, res) => {
    knex.select('*')
        .from('produto')
        .then(produtos => {
            res.status(200).json(produtos)
        })
};

// Obter um produto específico
let getProdPerId = (req, res) => {
    knex.select('*')
        .from('produto')
        .where({ id: req.params.id })
        .then(produtos => {
            if (produtos.length) {
                res.status(200).json(produtos)
            }
            else {
                res.status(404).json({ message: 'Produto nao encontrado' })
            }

        })
};

// Alterar um produto
let updateProd = (req, res) => {
    knex('produto')
        .where({ id: req.params.id })
        .update({ descricao: req.body.descricao, valor: req.body.valor, marca: req.body.marca }, ['id', 'descricao', 'valor', 'marca'])
        .then(n => {
            if (n.length) {
                res.status(200).json({ message: 'Produto atualizado com sucesso' })
            }
            else {
                res.status(404).json({ message: 'Produto nao encontrado' })
            }

        });
};

// Excluir um produto
let deleteProd = (req, res) => {
    knex('produto')
        .where({ id: req.params.id })
        .del()
        .then(n => {
            res.status(201).json({ message: 'Produto excluido com sucesso' })

        });
};

module.exports = {
    addProducts,
    getProducts,
    getProdPerId,
    updateProd,
    deleteProd
};