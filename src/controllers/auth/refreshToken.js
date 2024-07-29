const jwt = require("jsonwebtoken");

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

async function refreshToken(req, res, next) {
  const token = req.body.refreshToken;

  const { id } = jwt.verify(token, REFRESH_SECRET_KEY);

  if (!id) {
    return res.status(401).json({
      message: "Not authorized",
      clarification: "Token not have id"
    });
  }

  // const user = await OktenUser.findById(id);

  // if (!user) {
  //   return res.status(401).json({ message: "user not found" });
  // }

  try {
    const payload = {
      id
    };
    const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: "1m"
    });
    const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
      expiresIn: "10m"
    });

    return res.status(200).json({
      status: "success",
      code: 200,
      accessToken: accessToken,
      refreshToken: refreshToken
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = refreshToken;
