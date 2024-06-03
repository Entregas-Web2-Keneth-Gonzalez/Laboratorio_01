import { Router } from 'express';
import ProductosController from './controller/ProductosController';

const router = Router();

router.get('/productos', ProductosController.obtenerTodos);
router.get('/productos/:cedula', ProductosController.obtenerPorCedula);

router.post('/productos', ProductosController.crear);
router.put('/productos/:cedula', ProductosController.actualizar);
router.delete('/productos/:cedula', ProductosController.eliminar);

router.get('/productos/estado/:estado', ProductosController.obtenerPorEstado);

export default router;
