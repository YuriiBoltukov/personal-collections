function errorHandlerMd(err, req, res, next) {
  const errStatus = err.status || 500;
  const errMsg = err.message || 'Internal server error';

  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {},
  })
}

module.exports.errorHandlerMd = errorHandlerMd;

