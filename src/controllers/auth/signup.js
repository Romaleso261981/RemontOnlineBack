const bcrypt = require("bcrypt");
const { OktenUser } = require("../../schemas/oktenUser");

async function signup(req, res) {
  const { email, password, name, avatarUrl } = req.body;
  const emailToLoWerCase = email.toLowerCase();

  // const userCheck = await User.findOne({ email: emailToLoWerCase });
  // if (userCheck) {
  //   res.status(409).json({ message: "Email in use" });
  //   return;
  // }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await OktenUser.create({
    email: emailToLoWerCase,
    password: hashedPassword,
    name,
    avatarUrl
  });

  return res.status(201).json({
    status: "success",
    code: 201,
    newUser
  });
}

module.exports = signup;
