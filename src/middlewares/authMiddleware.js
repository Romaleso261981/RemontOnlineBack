const jwt = require("jsonwebtoken");
const { OktenUser } = require("../schemas/oktenUser");
const { ACCESS_SECRET_KEY } = process.env;

const authMiddleware = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  try {
    if (bearer !== "Bearer" || !token) {
      return res.status(401).json({
        message: "Not authorized",
        clarification: "Please, provide a token in request authorization header"
      });
    }

    const { id } = jwt.verify(token, ACCESS_SECRET_KEY);
    if (!id) {
      return res.status(401).json({
        message: "Not authorized",
        clarification: "Token not have id"
      });
    }

    const user = await OktenUser.findById(id);
    if (!user) {
      return res.status(401).json({ message: "user not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Not authorized",
      clarification: "error catch",
      error
    });
  }
};

module.exports = {
  authMiddleware
};
