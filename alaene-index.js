import express from 'express';
import ProductsRoutes from './routes/ProductsRoutes.js';

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