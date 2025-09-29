export const test = (req, res) => {
    res.status(200);
    res.send("Test OK");
}

export const leerProductos = (req, res) => {
    res.status(200);
    res.send("Leer productos OK");
}

export const AgregarProducto = (req, res) => {
    res.status(201);
    res.send("Agregar producto OK");
}
export const actualizarProducto = (req, res) => {
    res.status(200);
    res.send("Actualizar producto OK");
}
export const borrarProducto = (req, res) => {
    res.status(200);
    res.send("Borrar producto OK");
}