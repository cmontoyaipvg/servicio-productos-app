const Product = require('../models/Product');

// Obtener todos los productos
exports.getAll = async (req, res) => {
  try {
    const productos = await Product.find();
    const productosConUrl = productos.map(p => ({
      ...p.toObject(),
      imagen: `${req.protocol}://${req.get('host')}/img/${p.imagen}`
    }));
    res.json(productosConUrl);
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al obtener productos' });
  }
};

// Obtener un producto por ID
exports.getById = async (req, res) => {
  try {
    const producto = await Product.findById(req.params.id);
    if (producto) {
      const productoConUrl = {
        ...producto.toObject(),
        imagen: `${req.protocol}://${req.get('host')}/img/${producto.imagen}`
      };
      res.json(productoConUrl);
    } else {
      res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al buscar producto' });
  }
};

// Crear un nuevo producto
exports.create = async (req, res) => {
  try {
    const { nombre, descripcion, marca, precio, imagen } = req.body;
    const nuevoProducto = new Product({ nombre, descripcion, marca, precio, imagen });
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(400).json({ mensaje: 'Error al crear producto' });
  }
};
