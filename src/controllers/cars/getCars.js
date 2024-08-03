const { Cars } = require("../../schemas/cars");
const jwt = require("jsonwebtoken");

const getCars = async (req, res) => {
  const {
    query: { page = 1, limit = 6 }
  } = req;

  const numberPage = Number(page);

  const { ACCESS_SECRET_KEY } = process.env;

  const { authorization = "" } = req.headers;
  const [_, token] = authorization.split(" ");

  const { id } = jwt.verify(token, ACCESS_SECRET_KEY);

  try {
    const total_items = await Cars.countDocuments({ owner: id });

    const total_pages = Math.ceil(total_items / limit);

    const skip = (numberPage - 1) * limit;

    const cars = await Cars.find({ owner: id }).skip(skip).limit(Number(limit));

    const prev = numberPage > 1 ? numberPage - 1 : null;
    const next = numberPage < total_pages ? numberPage + 1 : null;

    return res.status(200).json({
      items: cars,
      carsRespons: {
        total_pages,
        total_items,
        prev,
        next
      }
    });
  } catch (error) {
    console.error("Error fetching cars by owner:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getCars;
