const { Cars } = require("../../schemas/cars");
const jwt = require("jsonwebtoken");

const getDocs = async (req, res) => {
  try {
    return res.status(200).json({});
  } catch (error) {
    console.error("Error fetching cars by owner:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getDocs;
