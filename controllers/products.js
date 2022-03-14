
var produtos =  []

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
    console.log(`Produtos na base: ${produtos}`);
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
    
    prod.descricao = req.body.descricao;
    prod.id = req.body.id;

    console.log(`Descrição atualizada para ${req.body.descricao}. E id atualizado para ${req.body.id}`)
    res.send(`Descrição atualizada para ${req.body.descricao}. E id atualizado para ${req.body.id}`)
};

// Excluir um produto
export const deleteProd = (req, res) => { 
    console.log(`Produto referente ao ${req.params.id} foi excluído.`);
    res.send(`Produto referente ao id ${req.params.id} foi excluído.`);
    produtos = produtos.filter((prod) => prod.id != req.params.id);
};
