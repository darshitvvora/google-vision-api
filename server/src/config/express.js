/**
 * Express configuration
 */


const express = require('express');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const errorHandler = require('errorhandler');
const path = require('path');

const cors = require('cors');
const config = require('./environment');
const session = require('express-session');


module.exports = function (app) {
  const env = app.get('env');

  if (env === 'development' || env === 'test') {
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(morgan('dev'));
  }

  if (env === 'production') {
    app.use(favicon(path.join(config.root, 'client', 'favicon.ico')));
  }

  // - only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use\, custom Nginx setup)
  app.enable('trust proxy');

  app.set('appPath', path.join(config.root, 'client'));
  app.use(express.static(app.get('appPath')));


  app.set('views', `${config.root}/server/views`);
  app.set('view engine', 'pug');
  app.use(cors());
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(methodOverride());
  app.use(cookieParser());


  if (env === 'development' || env === 'test') {
    app.use(errorHandler()); // Error handler - has to be last
  }

};
