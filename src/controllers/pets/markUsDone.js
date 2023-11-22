const { Order } = require("../../schemas/order");
const { NotFound } = require("http-errors");

const markUsDone = async (req, res) => {
  const { orderId } = req.params;

  const removedOrder = await Order.findByIdAndUpdate(orderId, {
    type: "зроблено",
 });

  if (!removedOrder) {
    throw new NotFound(`Order with id = ${orderId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    removedOrder
  });
};

module.exports = markUsDone;
