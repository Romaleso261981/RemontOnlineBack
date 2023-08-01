const express = require("express");
const { uploadCloud } = require("../../middlewares/uploadCloud");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { addOrder, markUsDone, changeOrder } = require("../../controllers/pets");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const orderRouter = express.Router();

// створити ендпоінт для додавання карточки тварини користувача
orderRouter.post(
  "/order",
  ctrlWrapper(authMiddleware),
  uploadCloud.single("photo"),
  ctrlWrapper(addOrder)
);

// створити ендпоінт для видалення карточки з твариною користувача
orderRouter.post("/done/:orderId", ctrlWrapper(markUsDone));
orderRouter.post("/editing/:orderId", ctrlWrapper(changeOrder));

module.exports = orderRouter;
