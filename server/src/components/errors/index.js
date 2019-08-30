/**
 * Error responses
 */


module.exports[404] = function pageNotFound(req, res) {
  const statusCode = 404;
  const result = {
    status: statusCode,
  };


  res.status(result.status);
  res.json(result);
};
