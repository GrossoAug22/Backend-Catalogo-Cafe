import Producto from "../models/producto.js";


export const test = (req, res) => {
  res.status(200);
  res.send("Test OK");
};

export const leerProductos = (req, res) => {
  res.status(200);
  res.send("Leer productos OK");
};

export const crearProducto = async (req, res) => {
  try {
      const nuevoProducto = new Producto(req.body);
      await nuevoProducto.save();
      
      res.status(201);
        res.send({ message: "Producto creado con éxito", producto: nuevoProducto });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al crear el producto"});
  }
};
export const actualizarProducto = (req, res) => {
  res.status(200);
  res.send("Actualizar producto OK");
};
export const borrarProducto = (req, res) => {
  res.status(200);
  res.send("Borrar producto OK");
};
