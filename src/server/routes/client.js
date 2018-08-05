const Router = require('koa-router');
const rp = require('request-promise');

const router = new Router();
const BASE_URL = `/client/v1/companies`;

var options = {
    uri: 'http://localhost:1337/api/v1/companies',
    qs: {
        access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

// GET all companies
router.get(BASE_URL, (ctx) => {
  try {

    rp(options)
        .then(function (repos) {
          ctx.body = {
            status: 'success',
            client: true,
            result: repos
          };
        })
        .catch(function (err) {
            // API call failed...
        });
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
