const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/[a-z0-9]+@[a-z0-9]+/, "user email is not valid!"]
    },
    password: {
      type: String,
      required: [true, "password is required"]
    },
    avatarUrl: {
      type: String,
      default: ""
    }
  },
  { versionKey: false, timestamps: true }
);

const OktenUser = mongoose.model("oktenUsers", schema);

module.exports = {
  OktenUser
};
