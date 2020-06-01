import { Router } from 'express';

import BhaskaraController from './controllers/BhaskaraController';
import AreaController from './controllers/AreaController';

const routes =  Router();

routes.post('/bhaskaraAcount', BhaskaraController.index);
routes.post('/areaAcount/triangle', AreaController.triangle);

export default routes;