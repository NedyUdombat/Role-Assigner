const successResponse = (res, statusCode, message, data) => {
  const response = {
    status: statusCode,
    message,
    data,
  };
  return res.status(statusCode).json(response);
};

const errorResponse = (res, statusCode, message) => {
  const response = {
    status: statusCode,
    error: message,
  };
  return res.status(statusCode).json(response);
};

export {
  successResponse,
  errorResponse,
};