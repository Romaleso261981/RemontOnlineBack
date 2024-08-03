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
    // Загальна кількість карток
    const total_items = await Cars.countDocuments({ owner: id });

    // Загальна кількість сторінок
    const total_pages = Math.ceil(total_items / limit);

    // Позиція для пагінації
    const skip = (numberPage - 1) * limit;

    // Отримання карток з пагінацією
    const cars = await Cars.find({ owner: id }).skip(skip).limit(Number(limit));

    // Обчислення попередньої та наступної сторінок
    const prev = numberPage > 1 ? numberPage - 1 : null;
    const next = numberPage < total_pages ? numberPage + 1 : null;

    return res.status(200).json({
      total_items,
      total_pages,
      prev,
      next,
      items: cars
    });
  } catch (error) {
    console.error("Error fetching cars by owner:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getCars;
