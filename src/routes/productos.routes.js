import { Router } from "express";
import { actualizarProducto, crearProducto, borrarProducto, leerProductos, test } from "./controllers/productos.controller.js";


const router = Router();

router.route("/test").get(test);
router.route("/").post(crearProducto).get(leerProductos);

export default router;