const express = require("express");
const { authController } = require("../../controllers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const authRouter = express.Router();

authRouter.post("/", ctrlWrapper(authController.login));
authRouter.post("/currentuser", authMiddleware, authController.currentUser);
authRouter.post("/refresh", authController.refreshToken);

module.exports = authRouter;
