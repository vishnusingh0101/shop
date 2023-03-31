const express = require('express');

const router = express.Router();

router.get('/', (_req, _res, next) => {
    _res.send('<h1>This is it</h1>')
});

module.exports = router;