const { User } = require("../../schemas/user");

async function logout(req, res, next) {
  try {
    // const { _id } = req.user;
    const _id = '642e8dbdc1a738bdb26c8091';
    console.log(_id);
    const oldUser = await User.findByIdAndUpdate(_id, {
      accessToken: null,
      refreshToken: null,
    });
    return res.status(204).json({ oldUser }); // "Logout was successfull"
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = logout;
