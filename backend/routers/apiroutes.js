const express = require('express');
const apiRouter = express.Router();
const regislib = require('../lib/reglib');
const adminlib = require('../lib/adminlib');
const doclib = require('../lib/doclib');
const appointlib = require('../lib/appointlib');

apiRouter.post('/reg/post',regislib.addnew);
apiRouter.post('/login/post',regislib.containornot);


apiRouter.post('/admin/reg',adminlib.addnew);
apiRouter.post('/admin/login',adminlib.containornot);


apiRouter.post('/reg/doc',doclib.addnew);
apiRouter.get('/doc/appoint/:id',doclib.getall);
apiRouter.delete('/docop/del/',doclib.deleteop);

apiRouter.post('/appoint/give',appointlib.addnew);

module.exports = apiRouter;