import express from 'express';
import { getProducts, addProducts, getProdPerId, deleteProd, updateProd } from '../controllers/ProductsController.js';

const router = express.Router();

router.get('/', getProducts);

router.post('/', addProducts);

router.get('/:id', getProdPerId);

router.delete('/:id', deleteProd);

router.patch('/:id', updateProd);

export default router;