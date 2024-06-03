import express from 'express';
import ProductosController from '../src/controller/ProductosController';

const router = express.Router();

router.get('/productos', ProductosController.obtenerTodos);
router.get('/productos/:cedula', ProductosController.obtenerPorCedula);
router.post('/productos', ProductosController.crear);
router.put('/productos/:cedula', ProductosController.actualizar);
router.delete('/productos/:cedula', ProductosController.eliminar);

export default router;
