const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();

router.get('/', (_req, _res, next) => {
    _res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.get('/contact', (_req, _res, next)=>{
    _res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

router.post('/successful', (_req, _res, next)=>{
    _res.sendFile(path.join(rootDir, 'views', 'successful.html'));
});

module.exports = router;