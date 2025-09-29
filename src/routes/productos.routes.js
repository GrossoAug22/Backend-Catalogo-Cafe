import { Router } from "express";
import { actualizarProducto, AgregarProducto, borrarProducto, leerProductos, test } from "./controllers/productos.controller.js";


const router = Router();

router.route("/test").get(test);
router.route("/").get(leerProductos, AgregarProducto, actualizarProducto,borrarProducto);

export default router;