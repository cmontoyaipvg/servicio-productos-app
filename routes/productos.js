const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.getAll);
router.get('/:id', productosController.getById);
router.post('/', productosController.create);

module.exports = router;
