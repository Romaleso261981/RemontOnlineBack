const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OktenUser } = require("../../schemas/oktenUser");

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

async function login(req, res) {
  try {
    const { username, password } = req.body;

    const user = await OktenUser.findOne({ username });
    const userPassword = await bcrypt.compare(password, user.password);
    if (!user || !userPassword) {
      return res.status(401).json({
        detail: "No active account found with the given credentials"
      });
    }

    const payload = {
      id: user._id
    };
    const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: "60m"
    });
    const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
      expiresIn: "120m"
    });

    return res.status(200).json({
      access: accessToken,
      refresh: refreshToken
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = login;
