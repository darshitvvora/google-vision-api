/*
* Purpose: Middleware for connecting to google vision
* Usage:
* const { authenticateClientCredential } = require('../../components/authenticateClientCredential');
* router.get('/clients', authenticateClientCredential(), clients.index);
* */


const vision = require('@google-cloud/vision');
let googleVision;
try {
// Create a client
  googleVision = new vision.ImageAnnotatorClient();
} catch (e) {
  logger.error("Google Vision Connection Failed",e)
}

module.exports = googleVision;
