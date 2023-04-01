const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (_req, _res) => {
    _res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // ...
});

router.post('/add-product', (_req, _res)=>{
    console.log(_req.body);
    _res.redirect('/shop/');
});

module.exports = router;