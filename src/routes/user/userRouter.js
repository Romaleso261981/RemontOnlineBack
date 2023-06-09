const express = require("express");
const userRouter = express.Router();
const { userController } = require("../../controllers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

// 12. створити ендпоінт для отримання:
// -  особистої інформації про користувача, з коллекції users
// - інформації про тварин корисувача, з коллекції pets.

userRouter.get(
  "/about",
  authMiddleware,
  ctrlWrapper(userController.aboutUserEndPets)
);
userRouter.post(
  "/current",
  ctrlWrapper(userController.currentUser)
);

module.exports = userRouter;
