import { Router } from 'express';
import productsController from '../productController/productController';

const productsRouter = Router();

productsRouter.get('/', productsController.list);
productsRouter.get('/:id', getOne);
productsRouter.post('/', save);
productsRouter.put('/:id', update);
productsRouter.delete('/:id', deleteOne);

export default productsRouter;