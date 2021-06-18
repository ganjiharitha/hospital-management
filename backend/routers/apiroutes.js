const express = require('express');
const apiRouter = express.Router();
const regislib = require('../lib/reglib');
const adminlib = require('../lib/adminlib');
const doclib = require('../lib/doclib');
const appointlib = require('../lib/appointlib');
const admitlib = require('../lib/admitlib');

apiRouter.post('/reg/post',regislib.addnew);
apiRouter.post('/login/post',regislib.containornot);


apiRouter.post('/admin/reg',adminlib.addnew);
apiRouter.post('/admin/login',adminlib.containornot);


apiRouter.post('/reg/doc',doclib.addnew);
apiRouter.get('/doc/appoint/:id',doclib.getall);
apiRouter.get('/doc/admit/:id',doclib.getdoc);
apiRouter.get('/rec/doc',doclib.getalldoc);
apiRouter.get('/doc/patint/:id',doclib.getalladmit);
apiRouter.get('/doc/appo/:id',doclib.getallappo);


apiRouter.post('/appoint/give',appointlib.addnew);
apiRouter.post('/appoint/save',appointlib.newsave);
apiRouter.get('/all/appoint',appointlib.getall);
apiRouter.get('/rec/appo',appointlib.getappo);

apiRouter.post('/admin/post',admitlib.addnew);
apiRouter.get('/rec/patint',admitlib.getpat);

module.exports = apiRouter;