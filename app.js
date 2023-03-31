const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((_req, _res, next)=>{
    _res.status(404).send('Page Not Found!!!');
});

app.listen(8369);
