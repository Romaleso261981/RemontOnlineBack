const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OktenUser } = require("../../schemas/oktenUser");

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await OktenUser.findOne({ email });
    const userPassword = await bcrypt.compare(password, user.password);
    if (!user || !userPassword) {
      return res.status(401).json({ message: "Email or password is wrong" });
    }

    const payload = {
      id: user._id
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

module.exports = login;
