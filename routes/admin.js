const path = require('path');
const express = require('express');4

const controllersProduct = require('../controllers/product');


const router = express.Router();

router.get('/add-product', controllersProduct.getAddProduct);

router.post('/add-product', controllersProduct.postAddProduct);

module.exports = router;