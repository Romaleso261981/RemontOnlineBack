const { User } = require("../../schemas/user");
const jwt = require("jsonwebtoken");

const { REFRESH_SECRET_KEY, ACCESS_SECRET_KEY } = process.env;

async function currentUser(req, res) {
  console.log("currentUser");
  const { refreshToken: token } = req.body;

  if (token === undefined) {
    return res.status(404).json({ message: "refreshToken not found" });
  }

  const { id } = jwt.verify(token, REFRESH_SECRET_KEY);
  console.log(id);
  const user = await User.findById(id);
  console.log(user);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  const payload = {
    id,
  };

  const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
    expiresIn: "1m",
  });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: "20m",
  });

  return res.status(200).json({
    status: "success",
    code: 200,
    accessToken,
    refreshToken,
    data: {
      user,
    },
  });
}

module.exports = currentUser;
