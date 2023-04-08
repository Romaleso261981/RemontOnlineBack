const { Order } = require("../../schemas/order");
const { NotFound } = require("http-errors");

const removeById = async (req, res) => {
  const { petId } = req.params;

  const result = await Order.findByIdAndRemove(petId, req.body);

  if (!result) {
    throw new NotFound(`Order with id = ${petId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = removeById;
