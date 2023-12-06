const { Order } = require("../../schemas/order");

async function ordersByCategory(req, res) {
  const { user } = req;
  const { category } = req.params;

  const userWithPet = await Order.find({ type: category }).limit(1000);

  return res.status(200).json({
    data: {
      userWithPet,
      user,
    },
  });
}

module.exports =  ordersByCategory ;