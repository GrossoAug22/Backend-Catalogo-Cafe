import { Router } from "express";
import { actualizarProducto, crearProducto, borrarProducto, leerProductos, test, leerProductosID } from "./controllers/productos.controller.js";


const router = Router();

router.route("/test").get(test);
router.route("/").post(crearProducto).get(leerProductos);
router.route("/:id").get(leerProductosID).delete(borrarProducto).put(actualizarProducto);

export default router;