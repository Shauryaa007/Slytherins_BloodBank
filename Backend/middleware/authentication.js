const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
  const cookies = req.headers.cookie;

  if (!cookies) {
    return next(new UnauthenticatedError("Authentication Invalid"));
  }
  const token = cookies.split("=")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    return next(new UnauthenticatedError("Authentication Invalid"));
  }
};

module.exports = auth;
