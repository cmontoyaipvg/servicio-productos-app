require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Middleware para servir imágenes
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));
app.use(express.json());

// Rutas
const productosRouter = require('./routes/productos');
app.use('/productos', productosRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
