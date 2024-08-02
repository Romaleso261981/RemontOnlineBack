const { Cars } = require("../../schemas/cars");

const deleteCars = async (req, res) => {
  console.log("data", req.body);

  return res.status(200).json({});
};

module.exports = deleteCars;
