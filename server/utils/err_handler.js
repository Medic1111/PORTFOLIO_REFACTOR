// GLOBAL ERROR CONTROL:
const errHandler = (err, req, res, next) => {
  console.log(err);
  process.env.NODE_ENV === "development" && console.log(err);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  let error = { ...err };

  if (err.name === "CastError") error = handleCastErrDB(error);
  if (err.code === 11000) error = handleDuplicateDB(error);
  if (err.errors) error = handleValidationDB(error);

  if (err.isOperational) {
    console.log("OPERATIONAL ERROR");
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
    });
  }
  return res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
    error: error,
  });
};

module.exports = errHandler;
