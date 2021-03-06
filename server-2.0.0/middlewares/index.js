const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const error = require('./error');
const gzip = require('./gzip');

module.exports = app => {
  app.use(error());
  app.use(gzip());
  app.use(cors());
  app.use(bodyParser());
}
