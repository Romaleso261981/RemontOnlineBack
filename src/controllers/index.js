const authController = require("./auth");
const orderController = require("./order");
const carsController = require("./cars/index");

module.exports = {
  authController,
  orderController,
  carsController
};
