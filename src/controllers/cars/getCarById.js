const { Cars } = require("../../schemas/cars");

const getCarById = async (req, res) => {
  const { id } = req.params;

  console.log("id", id);

  try {
    const card = await Cars.findById(id);

    return res.status(200).json(card);
  } catch (error) {
    console.error("Error fetching cars by owner:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getCarById;
