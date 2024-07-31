const bcrypt = require("bcrypt");
const { OktenUser } = require("../../schemas/oktenUser");

async function signup(req, res) {
  const { username, password } = req.body;

  console.log("req.body", req.body);

  const userCheck = await OktenUser.findOne({ username });
  if (userCheck) {
    res
      .status(409)
      .json({ username: ["user model with this username already exists."] });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await OktenUser.create({
    password: hashedPassword,
    username
  });

  return res.status(201).json({ newUser });
}

module.exports = signup;
