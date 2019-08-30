const googleVision = require('../../components/googleVision');

async function getAadharNumber(req, res, next) {
  try {
    const results = await googleVision
      .textDetection(req.body.url);

    const result = results[0].textAnnotations;
    const aadharNo = result[0].description.match(/(\d+){4}\s(\d+){4}\s(\d+){4}/);

    return res.json({'aadhar_no': aadharNo[0]});
  } catch (err) {
    return next(err);
  }
}

async function getPanNumber(req, res, next) {
  try {
    const results = await googleVision
      .textDetection(req.body.url);

    const result = results[0].textAnnotations;
    const panNo = result[0].description.match(/[A-Z]{5}[0-9]{4}[A-Z]{1}/);

    return res.json({'pan_no':panNo[0]});
  } catch (err) {
    return next(err);
  }
}
module.exports = {
  getAadharNumber,
  getPanNumber
};
