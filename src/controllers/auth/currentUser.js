const jwt = require("jsonwebtoken");
const { OktenUser } = require("../../schemas/oktenUser");
const { ACCESS_SECRET_KEY } = process.env;

async function currentUser(req, res) {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer" || !token) {
    return res.status(402).json({
      message: "Not authorized",
      clarification: "Please, provide a token in request authorization header"
    });
  }

  const { id } = jwt.verify(token, ACCESS_SECRET_KEY);
  if (!id) {
    return res.status(402).json({
      message: "Not authorized",
      clarification: "Token not have id"
    });
  }

  const user = await OktenUser.findById(id);
  if (!user) {
    return res.status(402).json({ message: "user not found" });
  }

  return res.status(201).json({ user });
}

module.exports = currentUser;
