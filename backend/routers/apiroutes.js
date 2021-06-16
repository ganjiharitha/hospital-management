const express = require('express');
const apiRouter = express.Router();
const regislib = require('../lib/reglib');

apiRouter.post('/reg/post',regislib.addnew);
apiRouter.post('/login/post',regislib.containornot);


module.exports = apiRouter;