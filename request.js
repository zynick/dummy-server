'use strict';

const request = require('request');

const options = {
  method: 'GET',
  url: `http://localhost:3000/server-error`
  // headers: { 'content-type': 'application/json' },
  // body: { origin },
  // json: true
};

request(options, (err, response, result) => {
  console.log(' ------------------------- ERROR ------------------------- ');
  console.log(err);
  console.log('\n\n\n ------------------------- RESPONSE ------------------------- ');
  console.log(response);
  console.log('\n\n\n ------------------------- RESULT ------------------------- ');
  console.log(result);
});

