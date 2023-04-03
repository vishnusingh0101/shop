const path = require('path');

const rootDir = require('../util/path');

const Product = require('../models/product');

exports.getAddProduct = (_req, _res) => {
    _res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};
exports.postAddProduct = (_req, _res)=>{
    const product = new Product(_req.body.title);
    product.save();
    _res.redirect('/shop/');
};

exports.getContact = (_req, _res, next)=>{
    _res.sendFile(path.join(rootDir, 'views', 'contact.html'));
};

exports.postSuccess = (_req, _res, next)=>{
    _res.sendFile(path.join(rootDir, 'views', 'successful.html'));
};

exports.getShop = (_req, _res, next) => {
    _res.sendFile(path.join(rootDir, 'views', 'shop.html'));
};
