const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((_req, _res, next)=>{
    _res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(4000);
  