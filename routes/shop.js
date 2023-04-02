const path = require('path');
const express = require('express');

const controllersProduct = require('../controllers/product');

const rootDir = require('../util/path');
const router = express.Router();

router.get('/', controllersProduct.getShop);

router.get('/contact', controllersProduct.getContact);

router.post('/successful', controllersProduct.postSuccess);

module.exports = router;