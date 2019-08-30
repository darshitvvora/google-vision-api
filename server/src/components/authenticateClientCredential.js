/*
* Purpose: Middleware for clientCredential grant type authentication
* Usage:
* const { authenticateClientCredential } = require('../../components/authenticateClientCredential');
* router.get('/clients', authenticateClientCredential(), clients.index);
* */

const config = require('../config/environment');
const clientCreds = JSON.parse(config['CLIENT_CREDS']);

function authenticateClientCredential() {
  return (req, res, next) => {
    if (req.method === 'GET') {
      if (req.query.clientKey && clientCreds[req.query.clientKey] === req.query.clientSecret) {
        return next();
      }
    } else if (req.body.clientKey && clientCreds[req.body.clientKey] === req.body.clientSecret) {
      return next();
    }

    return res.sendStatus(401);
  };
}

module.exports = {
  authenticateClientCredential
};
