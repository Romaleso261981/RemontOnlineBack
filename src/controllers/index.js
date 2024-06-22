const authController = require("./auth");
const orderController = require("./order");
const analyticsController = require("./googleAnalytics");

module.exports = {
  analyticsController,
  authController,
  orderController
};
