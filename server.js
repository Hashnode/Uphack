const express = require('express');
const next = require('next');
const site = require('./routes/site.routes');
const rpc = require('./routes/rpc.routes');
const { parse } = require('url');
const dbUtil = require('./db');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

dbUtil.connect();

const app = next({dir: '.', dev });
const handle = app.getRequestHandler();

const getRoutes = require('./routes');

const routes = getRoutes();
app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(site);
  server.use(rpc);

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query = {} } = parsedUrl;
    const route = routes[pathname];
    if (route) {
      return app.render(req, res, route.page, query);
    }
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});