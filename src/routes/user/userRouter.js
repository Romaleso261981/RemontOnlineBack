const express = require("express");
const { authController } = require("../../controllers");
// const { authMiddleware } = require("../../middlewares/authMiddleware");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");
const { uploadCloud } = require("../../middlewares/uploadCloud");

const userRouter = express.Router();

userRouter.post("/", ctrlWrapper(authController.signup));
userRouter.post("/login", ctrlWrapper(authController.login));
userRouter.post("/me", ctrlWrapper(authController.aboutUser));
userRouter.post("/refresh", ctrlWrapper(authController.refreshToken));
userRouter.put(
  "/change",
  uploadCloud.single("avatarUrl"),
  ctrlWrapper(authController.updateUser)
);
userRouter.get("/logout", ctrlWrapper(authController.logout));

module.exports = userRouter;
