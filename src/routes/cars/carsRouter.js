const express = require("express");
const { carsController } = require("../../controllers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const carsRouter = express.Router();

carsRouter.get("/", authMiddleware, ctrlWrapper(carsController.getCars));
carsRouter.post("/", authMiddleware, ctrlWrapper(carsController.addedCars));
carsRouter.delete("/", authMiddleware, ctrlWrapper(carsController.deleteCars));

module.exports = carsRouter;
