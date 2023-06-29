const { StatusCodes } = require("http-status-codes");

const User = require("../models/user");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require("../errors/index");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new BadRequestError("Please provide Email or Password");
    }
    const user = await User.findOne({ email });
    if (!user) {
      throw new UnauthenticatedError("Invalid Credentials");
    }
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      throw new UnauthenticatedError("Invalid Credentials");
    }
    const token = user.createJWT();
    res
      .status(StatusCodes.OK)
      .cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 3600000),
        sameSite: "none",
        secure: true,
      })
      .json({ user: { name: user.name }, token });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    res
      .status(StatusCodes.CREATED)
      .cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 3600000),
        sameSite: "none",
        secure: true,
      })
      .json({ user: { name: user.name }, token });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId, "-password");
    if (!user) {
      throw new NotFoundError("User not found");
    }
    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    next(error);
  }
};
const logout = (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
    sameSite: "none",
    secure: true,
  });

  res.status(StatusCodes.OK).json({ msg: "User logged out successfully" });
};
module.exports = { login, register, getUser, logout };
