const jwt = require("jsonwebtoken");

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

async function refreshToken(req, res, next) {
  const token = req.body.refreshToken;

  console.log("token", token);

  try {
    const payload = {
      id: "pmd,[pkef[lrt4654r6t54rt6gb464"
    };
    const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: "2m"
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
