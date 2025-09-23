require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Datos de ejemplo
let productos = [
	{
		id: 1,
		nombre: 'Camiseta Básica',
		descripcion: 'Camiseta de algodón 100% para uso diario.',
		marca: 'UrbanWear',
		precio: 15.99,
		imagen: 'camiseta_basica.jpg'
	},
	{
		id: 2,
		nombre: 'Jeans Slim Fit',
		descripcion: 'Jeans azul oscuro corte slim fit.',
		marca: 'DenimPro',
		precio: 39.99,
		imagen: 'jeans_slimfit.jpg'
	},
	{
		id: 3,
		nombre: 'Zapatillas Running',
		descripcion: 'Zapatillas ligeras para correr.',
		marca: 'FastStep',
		precio: 59.99,
		imagen: 'zapatillas_running.jpg'
	},
	{
		id: 4,
		nombre: 'Sudadera con Capucha',
		descripcion: 'Sudadera cómoda con capucha y bolsillo frontal.',
		marca: 'UrbanWear',
		precio: 29.99,
		imagen: 'sudadera_capucha.jpg'
	},
	{
		id: 5,
		nombre: 'Botines de Cuero',
		descripcion: 'Botines elegantes de cuero genuino.',
		marca: 'LeatherStyle',
		precio: 79.99,
		imagen: 'botines_cuero.jpg'
	},
	{
		id: 6,
		nombre: 'Vestido Casual',
		descripcion: 'Vestido fresco y cómodo para el verano.',
		marca: 'FashionDay',
		precio: 34.99,
		imagen: 'vestido_casual.jpg'
	},
	{
		id: 7,
		nombre: 'Sandalias Planas',
		descripcion: 'Sandalias planas para uso diario.',
		marca: 'SummerFeet',
		precio: 19.99,
		imagen: 'sandalias_planas.jpg'
	},
	{
		id: 8,
		nombre: 'Camisa Formal',
		descripcion: 'Camisa blanca ideal para oficina o eventos.',
		marca: 'Elegance',
		precio: 24.99,
		imagen: 'camisa_formal.jpg'
	},
	{
		id: 9,
		nombre: 'Pantalón Chino',
		descripcion: 'Pantalón chino beige, versátil y cómodo.',
		marca: 'UrbanWear',
		precio: 32.99,
		imagen: 'pantalon_chino.jpg'
	},
	{
		id: 10,
		nombre: 'Zapatos Oxford',
		descripcion: 'Zapatos Oxford clásicos para vestir.',
		marca: 'LeatherStyle',
		precio: 69.99,
		imagen: 'zapatos_oxford.jpg'
	},
	{
		id: 11,
		nombre: 'Falda Plisada',
		descripcion: 'Falda plisada midi, elegante y moderna.',
		marca: 'FashionDay',
		precio: 27.99,
		imagen: 'falda_plisada.jpg'
	},
	{
		id: 12,
		nombre: 'Chaqueta Vaquera',
		descripcion: 'Chaqueta vaquera azul, estilo clásico.',
		marca: 'DenimPro',
		precio: 44.99,
		imagen: 'chaqueta_vaquera.jpg'
	},
	{
		id: 13,
		nombre: 'Mocasines',
		descripcion: 'Mocasines cómodos para uso diario.',
		marca: 'LeatherStyle',
		precio: 54.99,
		imagen: 'mocasines.jpg'
	},
	{
		id: 14,
		nombre: 'Short Deportivo',
		descripcion: 'Short ligero para actividades deportivas.',
		marca: 'FastStep',
		precio: 17.99,
		imagen: 'short_deportivo.jpg'
	},
	{
		id: 15,
		nombre: 'Blusa Estampada',
		descripcion: 'Blusa con estampado floral, fresca y colorida.',
		marca: 'FashionDay',
		precio: 22.99,
		imagen: 'blusa_estampada.jpg'
	},
	{
		id: 16,
		nombre: 'Cinturón de Cuero',
		descripcion: 'Cinturón de cuero marrón, resistente y elegante.',
		marca: 'LeatherStyle',
		precio: 14.99,
		imagen: 'cinturon_cuero.jpg'
	},
	{
		id: 17,
		nombre: 'Polo Deportivo',
		descripcion: 'Polo transpirable para actividades físicas.',
		marca: 'FastStep',
		precio: 21.99,
		imagen: 'polo_deportivo.jpg'
	},
	{
		id: 18,
		nombre: 'Zapatillas Urbanas',
		descripcion: 'Zapatillas casuales para uso urbano.',
		marca: 'UrbanWear',
		precio: 49.99,
		imagen: 'zapatillas_urbanas.jpg'
	},
	{
		id: 19,
		nombre: 'Abrigo Largo',
		descripcion: 'Abrigo largo de paño para invierno.',
		marca: 'Elegance',
		precio: 89.99,
		imagen: 'abrigo_largo.jpg'
	},
	{
		id: 20,
		nombre: 'Botas de Montaña',
		descripcion: 'Botas resistentes para senderismo y montaña.',
		marca: 'FastStep',
		precio: 74.99,
		imagen: 'botas_montana.jpg'
	}
];

// Obtener todos los productos
app.get('/productos', (req, res) => {
	res.json(productos);
});

// Obtener un producto por ID
app.get('/productos/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const producto = productos.find(p => p.id === id);
	if (producto) {
		res.json(producto);
	} else {
		res.status(404).json({ mensaje: 'Producto no encontrado' });
	}
});

// Crear un nuevo producto
app.post('/api/productos', (req, res) => {
	const { nombre, precio } = req.body;
	const nuevoProducto = {
		id: productos.length + 1,
		nombre,
		precio
	};
	productos.push(nuevoProducto);
	res.status(201).json(nuevoProducto);
});

// Iniciar el servidor
app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});