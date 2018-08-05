const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const indexRoutes = require('./routes/index');
const companiesRoutes = require('./routes/companies');
const clientRoutes = require('./routes/client');


const app = new Koa();
const PORT = process.env.PORT || 1337;

app.use(cors());

app.use(bodyParser());
app.use(indexRoutes.routes());
app.use(companiesRoutes.routes());
app.use(clientRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
