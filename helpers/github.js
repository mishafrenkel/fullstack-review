const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, cb) => {

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, res, body) => {
    cb(JSON.parse(body));
  });

}

module.exports.getReposByUsername = getReposByUsername;