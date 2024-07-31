const { Cars } = require("../../schemas/cars");
const { OktenUser } = require("../../schemas/oktenUser");

const jwt = require("jsonwebtoken");

const getCars = async (req, res) => {
  const { ACCESS_SECRET_KEY } = process.env;

  const { authorization = "" } = req.headers;
  const [_, token] = authorization.split(" ");

  let cars = [];
  let total_items = 0;
  let total_pages = 0;
  let prev = null;
  let next = null;

  const { id } = jwt.verify(token, ACCESS_SECRET_KEY);

  try {
    cars = await Cars.find({ owner: id });
    console.log("cars", cars);
  } catch (error) {
    console.error("Error fetching cars by owner:", error);
    throw error;
  }

  return res.status(200).json({
    total_items,
    total_pages,
    prev,
    next,
    items: cars
  });
};

module.exports = getCars;
