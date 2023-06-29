const express = require("express");
const router = express.Router();
const authenticationHandler = require("../middleware/authentication");
const { login, register, getUser, logout } = require("../controllers/auth");
router.post("/login", login);
router.post("/register", register);
router.get("/getUser", authenticationHandler, getUser);
router.get("/logout", authenticationHandler, logout);

module.exports = router;
