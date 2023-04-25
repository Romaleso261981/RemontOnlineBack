const { Order } = require("../../schemas/order");
const { NotFound } = require("http-errors");

const changeOrder = async (req, res) => {
  const { orderId } = req.params;

  // const result = await Order.findById(orderId);
//   const result = await Order.findByIdAndDelete({ _id: orderId });

  const result = await Order.findByIdAndUpdate(orderId, {
    type: "зроблено",
  });

  if (!result) {
    throw new NotFound(`Order with id = ${orderId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    result,
  });
};

module.exports = changeOrder;
