const { Order } = require("../../schemas/order");
// const { NotFound } = require("http-errors");

const removeById = async (req, res) => {
  const { orderId } = req.params;

  // const result = await Order.findById(orderId);
  const result = await Order.findByIdAndDelete({ _id: orderId });
  
  // const result = Order.findByIdAndUpdate(orderId, {
  //   status: "зроблено",
  // });
  // if (!result) {
  //   throw new NotFound(`Order with id = ${orderId} not found`);
  // }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = removeById;
