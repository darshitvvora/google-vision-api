const express = require('express');
const controller = require('./document.controller');
const { authenticateClientCredential }= require('../../components/authenticateClientCredential');


const router = express.Router();

router.post('/aadharno',authenticateClientCredential() ,controller.getAadharNumber);
router.post('/panno', authenticateClientCredential() ,controller.getPanNumber);

module.exports = router;
