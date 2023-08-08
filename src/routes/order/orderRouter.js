const express = require("express");
const { uploadCloud } = require("../../middlewares/uploadCloud");
// const { authMiddleware } = require("../../middlewares/authMiddleware");
const { addOrder, removeById, changeOrder } = require("../../controllers/pets");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const orderRouter = express.Router();

// створити ендпоінт для додавання карточки тварини користувача
orderRouter.post(
  "/order",
  uploadCloud.single("photo"),
  ctrlWrapper(addOrder)
);

// створити ендпоінт для видалення карточки з твариною користувача
orderRouter.delete("/:orderId", ctrlWrapper(removeById));
orderRouter.post("/editing/:orderId", ctrlWrapper(changeOrder));

module.exports = orderRouter;
