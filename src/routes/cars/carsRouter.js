const express = require("express");
const { carsController } = require("../../controllers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const carsRouter = express.Router();

carsRouter.get("/", authMiddleware, ctrlWrapper(carsController.getCars));
carsRouter.get(
  "/detail/:id",
  authMiddleware,
  ctrlWrapper(carsController.getCarById)
);
carsRouter.post("/", authMiddleware, ctrlWrapper(carsController.addedCars));
carsRouter.post(
  "/update/:id",
  authMiddleware,
  ctrlWrapper(carsController.changeCard)
);
carsRouter.delete(
  "/:id",
  authMiddleware,
  ctrlWrapper(carsController.deleteCars)
);

module.exports = carsRouter;
