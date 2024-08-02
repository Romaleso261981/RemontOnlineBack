const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const authChange = require("./authChange");
const aboutUser = require("./aboutUser");
const updateUser = require("./updateUser");
const refreshToken = require("./refreshToken");
const currentUser = require("./currentUser");

module.exports = {
  signup,
  login,
  logout,
  authChange,
  aboutUser,
  updateUser,
  refreshToken,
  currentUser
};
