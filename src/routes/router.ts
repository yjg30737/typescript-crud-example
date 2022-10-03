import express from 'express';

import * as controller from '../controllers/controller';

import DtoValidatorMiddleware from '../middlewares/middleware';
import { Person } from '../compiler/types'

const router = express.Router();

router.get('/getAll', controller.getAll);
router.get('/getById', controller.getById);
router.post('/create', DtoValidatorMiddleware(Person, true), controller.create);
router.put('/update', DtoValidatorMiddleware(Person, true), controller.update);
router.delete('/delete', controller.remove);

export default router;