const { Cars } = require("../../schemas/cars");

const changeCard = async (req, res) => {
  const { brand, price, year, photo } = req.body;

  const { id } = req.params;
  try {
    const result = await Cars.findByIdAndUpdate(id, {
      brand,
      price,
      year,
      photo
    });

    if (!result) {
      return res.status(404).json({
        status: "error",
        message: `Card with id = ${id} not found`
      });
    }

    return res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = changeCard;
