const { Cars } = require("../../schemas/cars");
const { OktenUser } = require("../../schemas/oktenUser");

const jwt = require("jsonwebtoken");

async function addedCars(req, res) {
  const { ACCESS_SECRET_KEY } = process.env;
  const { authorization = "" } = req.headers;
  const [_, token] = authorization.split(" ");

  const { id } = jwt.verify(token, ACCESS_SECRET_KEY);

  const { brand, price, year } = req.body;

  const newUser = await Cars.create({
    brand,
    price,
    year,
    owner: id
  });

  console.log("car", newUser);

  return res.status(200).json(newUser);
}

module.exports = addedCars;
