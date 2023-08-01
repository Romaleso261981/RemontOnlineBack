const { Order } = require("../../schemas/order");
const { NotFound } = require("http-errors");

const markUsDone = async (req, res) => {
  const { orderId } = req.params;

  const newUser = await Order.findByIdAndUpdate(orderId, {
    type: "зроблено",
 });

  if (!newUser) {
    throw new NotFound(`Order with id = ${orderId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    newUser
  });
};

module.exports = markUsDone;
