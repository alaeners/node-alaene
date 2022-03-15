import knex from 'knex';
import express from 'express';
import productsRouters from './routes/products.js';

dotenv.config()

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

app.use('/products', productsRouters);