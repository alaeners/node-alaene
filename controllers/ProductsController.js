import { config } from 'dotenv';
import { knex } from 'knex';

var produtos =  []

export function openConnection() {
    const _knex = require('knex') ( {
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnatorized: false
        },
    }
});
    knex(_knex)
}

//Criando id sequencial
export function setId() {
    return produtos.length+1
};

// Incluir um produto
export const addProducts = (req, res) => {   
    const prod = req.body;
    produtos.push({id: setId(), 
                   descricao: prod.descricao, 
                   valor: prod.valor, 
                   marca: prod.marca});
    console.log(`Produto ${prod.descricao} adicionado.`);
    res.send(`Produto ${prod.descricao} adicionado com sucesso.`);
};

// Obter a lista de produtos
export const getProducts = (req, res) => {
    console.log(`Lista de produtos cadastrados: ${produtos}`);
    res.send(produtos);
};

// Obter um produto específico
export const getProdPerId = (req, res) => {
    const prod = produtos.find((prod) => prod.id == req.params.id);
    console.log(prod);
    res.send(prod);
};

// Alterar um produto
export const updateProd =  (req,res) => {
    const prod = produtos.find((prod) => prod.id == req.params.id);

    if (req.body.descricao != undefined || req.body.descricao != "") {
        prod.descricao = req.body.descricao;
        console.log(`Descrição atualizada para ${req.body.descricao}.`)
    }

    if (req.body.marca != undefined || req.body.marca != "") {
        prod.marca = req.body.marca;
        console.log(`Marca atualizada para ${req.body.marca}.`)
    }

    if (req.body.valor != undefined || req.body.valor != "") {
        prod.valor = req.body.valor;
        console.log(`Valor atualizado para ${req.body.valor}.`)
    }
    res.send("Informações atualizadas com sucesso!")
};

// Excluir um produto
export const deleteProd = (req, res) => { 
    console.log(`Produto referente ao ${req.params.id} foi excluído.`);
    res.send(`Produto referente ao id ${req.params.id} foi excluído.`);
    produtos = produtos.filter((prod) => prod.id != req.params.id);
};