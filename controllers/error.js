const path = require('path');

const rootDir = require('../util/path');

exports.errorControl = (_req, _res, next)=>{
    _res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
};
