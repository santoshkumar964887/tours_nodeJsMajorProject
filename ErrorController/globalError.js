exports.globalError=(err, req, res, next) => {
    err.status = err.status || "Error";
    err.message = err.message || "Not Found";
    err.errorCode = 404;
    res.status(err.errorCode).json({
      status: err.status,
      message: err.message,
    });
    next();
  };
  
