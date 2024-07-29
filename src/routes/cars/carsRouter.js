const express = require("express");
const { carsController } = require("../../controllers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const carsRouter = express.Router();

carsRouter.get(
  "/",
  authMiddleware,
  authMiddleware,
  ctrlWrapper(carsController.getCars)
);

module.exports = carsRouter;
