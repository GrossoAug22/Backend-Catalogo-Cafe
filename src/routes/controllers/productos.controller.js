import Producto from "../models/producto.js";


export const test = (req, res) => {
  res.status(200);
  res.send("Test OK");
};

export const leerProductos = async(req, res) => {
  try {
    const listaProductos = await Producto.find();
    res.status(200).json(listaProductos);

  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al leer los productos" });
  }
};
export const leerProductosID = async(req, res) => {
  try {
const productoBuscado = await Producto.findById(req.params.id);
if(!productoBuscado){
  return res.status(404).json({mensaje: "Producto no encontrado"});}
res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al obtener producto por id" });
  }
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
export const borrarProducto = async(req, res) => {
  try {
    const productoBorrado = await Producto.findByIdAndDelete(req.params.id);
    if(!productoBorrado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.status(200).json({ mensaje: "Producto borrado con éxito", producto: productoBorrado });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al borrar el producto" });
  }
};
