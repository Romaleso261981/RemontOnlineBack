const { Order } = require("../../schemas/order");

async function noticesByCategory(req, res) {
  const { user } = req;
  const { category } = req.params;

  const userWithPet = await Order.find({ type: category }).limit(100);

  return res.status(200).json({
    data: {
      userWithPet,
      user,
    },
  });
}

module.exports = { noticesByCategory };
