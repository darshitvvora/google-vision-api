/**
 * Main application file
 */


const express = require('express');
const http = require('http');

const config = require('./config/environment');

// Setup src
const app = express();
const server = http.createServer(app);


require('./config/express')(app);
require('./routes')(app);
const logger = require('./components/logger');

// Start src
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, () => {
    logger.log('Server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

startServer();

// Expose app
module.exports = app;
