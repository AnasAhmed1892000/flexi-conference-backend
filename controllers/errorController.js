/* eslint-disable default-case */
/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable no-param-reassign */

const AppError = require('../utils/appError');

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong!',
    });
  }
};

const handleCastErrorDB = (err) =>
  new AppError(`Invalid ${err.path}: ${err.value}`, 400);

const handleDuplicateErrorDB = (err) =>
  new AppError(`There is an existing email addres: ${err.keyValue.email}`, 400);

const handleValidatorErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Invalid Token, please login again!', 401);

const handleJWTExpiry = () =>
  new AppError('Your token has expired, Please login again!', 401);

// Global Error Middleware

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode ?? 500;
  err.status = err.status ?? 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    switch (err.name) {
      case 'CastError':
        error = handleCastErrorDB(error);
        break;
      case 11000:
        error = handleDuplicateErrorDB(error);
        break;
      case 'ValidationError':
        error = handleValidatorErrorDB(error);
        break;
      case 'JsonWebTokenError':
        error = handleJWTError();
        break;
      case 'TokenExiredError':
        error = handleJWTExpiry();
        break;
    }
    if (err.code === 11000) error = handleDuplicateErrorDB(error);
    sendErrorProd(error, res);
  }
};
