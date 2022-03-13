const produtos =  []

export const getProducts = (req, res) => {
    console.log(`Produtos na base: ${produtos}`);
    res.send(produtos);
};

export const addProducts = (req, res) => {   
    const prod = req.body;
    produtos.push({...prod, id: 0});
    console.log(`Produto [${prod.id}] adicionado.`);
};

export const getProdPerId = (req, res) => {
    res.send(req.params.id)
};

export const deleteProd = (req, res) => { 
    console.log(`Produto de id ${req.params.id} foi excluído.`);
    produtos = produtos.filter((prod) => prod.id !== req.params.id);
};

export const updateProd =  (req,res) => {
    const prod = produtos.find((prod) => prod.id === req.params.id);
    
    prod.descricao = req.body.descricao;
    prod.id = req.body.id;

    console.log(`Descrição atualizada para ${req.body.descricao}. E id atualizado para ${req.body.id}`)
};
