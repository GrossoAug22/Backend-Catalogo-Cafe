import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validarProducto = [
  body("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del producto debe tener entre 2 y 100 caracteres"),
  body("precio")
    .notEmpty()
    .withMessage("El precio del producto es obligatorio")
    .isNumeric()
    .withMessage("El precio del producto debe ser un número")
    .custom((value) =>{
      if (value >=50 && value <=1000000){  {
        return true;}
      }else{
        throw new Error("El precio del producto debe estar entre 50 y 1,000,000");
      }
      
    }),
    body("imagen")
    .notEmpty()
    .withMessage("La imagen del producto es obligatoria")
    .matches(
      /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/
    )
    .withMessage("La imagen del producto debe ser una URL válida que termine en .jpg, .jpeg, .png o .webp"),
  (req, res, next) => resultadoValidacion(req, res, next)
];

export default validarProducto;
