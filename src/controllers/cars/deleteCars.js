const { Cars } = require("../../schemas/cars");
const jwt = require("jsonwebtoken");

const deleteCars = async (req, res) => {
  const { ACCESS_SECRET_KEY } = process.env;
  const { authorization = "" } = req.headers;
  const [_, token] = authorization.split(" ");

  const { id: ownerid } = jwt.verify(token, ACCESS_SECRET_KEY);

  const { id: carId } = req.params;

  let cars = [];
  let total_items = 0;
  let total_pages = 0;
  let prev = null;
  let next = null;

  try {
    const result = await Cars.findByIdAndDelete(carId);
    cars = await Cars.find({ owner: ownerid });
    if (!result) {
      throw new NotFound(`Order with id = ${orderId} not found`);
    }
  } catch (error) {
    console.log("error", error);
  }

  if (cars.length > 0) {
    total_items = cars.length;
    total_pages = Math.ceil(total_items / 10);
    prev = null;
    next = 2;
  }

  return res.status(200).json({
    total_items,
    total_pages,
    prev,
    next,
    items: cars
  });
};

module.exports = deleteCars;
