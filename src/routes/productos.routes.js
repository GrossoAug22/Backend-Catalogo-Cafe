import { Router } from "express";
import { actualizarProducto, crearProducto, borrarProducto, leerProductos, test, leerProductosID } from "../controllers/productos.controller.js";
import validarProducto from "../middlewares/validarProducto.js";


const router = Router();

router.route("/test").get(test);
router.route("/").get(leerProductos).post(validarProducto,crearProducto);
router.route("/:id").get(leerProductosID).delete(borrarProducto).put(validarProducto,actualizarProducto);

export default router;