# node-alaene
nodejs pos
- Link heroku: https://node-alaene.herokuapp.com/

## Exercício 1 - Montagem do Ambiente
O ambiente que vamos precisar é criado a partir do Visual Studio Code (VSCode). Abra o VSCode e crie uma aplicação Node.js utilizando o NPM e crie um repositório de código com o git. Ao ser disparada, sua aplicação deve apresentar o seu nome completo no Navegador da Internet. Em seguida, crie uma conta gratuita no Heroku (Links para um site externo.) e faça o deploy da aplicação para o ambiente do Heroku.

### Exercício 1 - Resultado

<p align="left">
    <img src="https://github.com/alaeners/node-alaene/blob/main/resultados/atv1/print_heroku_link.png?raw=true" height=200px alt="resultado do heroku">
    <img src="https://github.com/alaeners/node-alaene/blob/main/resultados/atv1/print_local_host.png?raw=true" height=200px alt="resultado do local host">
</p>

## Exercício 2 - Montagem de uma API RESTful
Nessa tarefa, vamos montar uma API simplificada no padrão RESTful com o Node.js e o Express, tendo um array simples como estrutura de dados. 

Utilize o servidor criado no Exercício 1 e siga os passos descritos a seguir. Você deverá submeter, além da URL um arquivo ZIP com o código do servidor criado por você.

#### Passo 1 – Criar a aplicação em Node.js para uma API Restfuul
Monte uma API RESTful de CRUD tendo como estrutura de dados um objeto JSON, conforme apresentado no quadro 1.

##### Quadro 1 – Estrutura de Dados de Produto
```
const lista_produtos = {
    produtos: [
        { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"  },
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"  },
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"  },
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"  },
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"  },
    ]
}
```

##### A API deve apresentar a seguinte estrutura
| AÇÃO | OPERAÇÃO (CRUD) | MAPEAMENTO DA URL |
| --- | --- | --- |
| Incluir um produto | CREATE | *POST* / produtos / |
| Obter a lista de produtos | RETRIEVE | *GET* / produtos |
| Obter um produto específico | RETRIEVE | *GET* / produtos /:id |
| Alterar um produto | UPDATE | *PUT* / produtos /:id |
| Excluir um produto | DELETE | *DELETE* / produtos /:id |

#### Passo 2
Publique o site no ambiente do Heroku. Entregue um arquivo ZIP com o código fonte e o link para sua aplicação no Heroku.

### Exercício 2 - Resultado
| AÇÃO | URL |
| --- | --- | 
| Incluir um produto | https://node-alaene.herokuapp.com/products/ |
| Obter a lista de produtos | https://node-alaene.herokuapp.com/products/ |
| Obter um produto específico | https://node-alaene.herokuapp.com/products/4 |
| Alterar um produto | https://node-alaene.herokuapp.com/products/4 |
| Excluir um produto | https://node-alaene.herokuapp.com/products/4 |
