const { Cars } = require("../../schemas/cars");
const { OktenUser } = require("../../schemas/oktenUser");

const jwt = require("jsonwebtoken");

async function addedCars(req, res) {
  const { ACCESS_SECRET_KEY } = process.env;
  const { authorization = "" } = req.headers;
  const [_, token] = authorization.split(" ");

  const { id } = jwt.verify(token, ACCESS_SECRET_KEY);

  const { brand, price, year, photo } = req.body;

  let cars = [];
  let total_items = 0;
  let total_pages = 0;
  let prev = null;
  let next = null;

  const newUser = await Cars.create({
    brand,
    price,
    year,
    photo,
    owner: id
  });

  try {
    cars = await Cars.find({ owner: id });
  } catch (error) {
    console.error("Error fetching cars by owner:", error);
    throw error;
  }

  if (cars.length > 0) {
    total_items = cars.length;
    total_pages = Math.ceil(total_items / 10);
    prev = null;
    next = null;
  }

  return res.status(200).json({
    total_items,
    total_pages,
    prev,
    next,
    items: cars
  });
}

module.exports = addedCars;
