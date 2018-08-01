'use strict';

const rp = require('request-promise');

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

rp(options)
    .then(function (repos) {
        console.log(repos);
    })
    .catch(function (err) {
        // API call failed...
    });
