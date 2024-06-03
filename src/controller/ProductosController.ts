import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Producto } from "../entity/Productos";
import { error } from "console";

class ProductosController{
    static obtenerTodos = async (req: Request, res: Response) => {
        const productoRepositoty = getRepository(Producto);
        const productos = await productoRepositoty.find();
        res.json(productos);
    };

    static obtenerPorCedula = async (req: Request, res: Response) => {
        const productoRepository = getRepository(Producto);
        const {cedula} = req.params;
    
        try {
            const producto = await productoRepository.findOne({where:{Cedula: parseInt(cedula)}});
    
            if (!producto) {
                return res.status(404).json({message: "Producto no encontrado"});
            }
    
            res.json(producto);
        } catch (error) {
            return res.status(500).json({message: "Error al obtener el producto por cédula", error: error.message});
        }
    };

    static crear = async (req: Request, res: Response) => {
        const productoRepositoty = getRepository(Producto);
        const nuevoProducto = productoRepositoty.create(req.body);
        const resultado = await productoRepositoty.save(nuevoProducto);
        res.json(resultado);
    };

    static actualizar = async (req: Request, res: Response) => {
        const productoRepositoty = getRepository(Producto);
        const { cedula } = req.params;
    
        try {
            const producto = await productoRepositoty.findOne({ where: { Cedula: parseInt(cedula) } });
    
            if (!producto) {
                return res.status(404).json({ message: "Producto no encontrado" });
            }
    
            productoRepositoty.merge(producto, req.body);
            const resultado = await productoRepositoty.save(producto);
            res.json(resultado);
        } catch (error) {
            return res.status(500).json({ message: "Error al actualizar el producto", error: error.message });
        }
    };

    static eliminar = async (req: Request, res: Response) => {
        const productoRepositoty = getRepository(Producto);
        const { cedula } = req.params;
        const producto = await productoRepositoty.delete(cedula);

        if(!producto){
            return res.status(404).json({message: "Producto no encontrado"});
        }

        res.json({message: "Producto eliminado correctamente"})
    };

    static obtenerPorEstado = async (req: Request, res: Response) => {
        const productoRepository = getRepository(Producto);
        const { estado } = req.params;

        try {
            const productos = await productoRepository.find({ where: { Estado: estado === 'true' } });

            if (productos.length === 0) {
                return res.status(404).json({ message: "No se encontraron productos con el estado proporcionado" });
            }

            res.json(productos);
        } catch (error) {
            return res.status(500).json({ message: "Error al obtener productos por estado", error: error.message });
        }
    };
}

export default ProductosController;