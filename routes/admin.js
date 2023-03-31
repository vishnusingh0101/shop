const express = require('express');

const router = express.Router();

router.get('/add-product', (_req, _res) => {
    _res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button><form/>')
    // ...
});

router.post('/add-product', (_req, _res)=>{
    console.log(_req.body);
    _res.redirect('/shop/');
});

module.exports = router;