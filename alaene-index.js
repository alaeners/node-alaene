require('dotenv').config();
const express = require('express') ;
const ProductsRoutes = require('./routes/ProductsRoutes') ;
const routerSec = require('./routes/routerSec') ;
//require = require("esm")(module/*, options*/);
//module.exports = require("./main.js");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', function(req, res) {
    console.log('Alaene Rufino de Sousa');
    res.send('Alaene Rufino de Sousa');
});

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}`);
});

app.use('/products', ProductsRoutes);
app.use('/seguranca', routerSec);