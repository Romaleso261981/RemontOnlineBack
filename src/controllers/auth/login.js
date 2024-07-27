// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../schemas/user");
// const { authSchema } = require("../../schemas/joi");

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

async function login(req, res, next) {
  try {
    const { email } = req.body;

    console.log("email", email);
    // const { error } = authSchema.validate(req.body);
    // if (error) {
    //   return res.status(400).json({ message: "Wrong email or password" });
    // }

    // const user = await User.findOne({ email });
    // const userPassword = await bcrypt.compare(password, user.password);
    // if (!user || !userPassword) {
    //   return res.status(401).json({ message: "Email or password is wrong" });
    // }

    // if (!user.verify) {
    //   return res.status(401).json({ message: "Your Email is not verifyied!" });
    // }
    const payload = {
      id: "pmd,[pkef[lrt4654r6t54rt6gb464"
    };
    const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: "2m"
    });
    const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
      expiresIn: "10m"
    });

    // await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });

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
