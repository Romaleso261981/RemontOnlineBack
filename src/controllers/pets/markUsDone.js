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

  const category = 'прийнятий'

  const userWithPet = await Order.find({ type: category }).limit(100);


  res.json({
    status: "success",
    code: 200,
    userWithPet
  });
};

module.exports = markUsDone;
