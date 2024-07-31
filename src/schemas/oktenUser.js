const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"]
    },
    password: {
      type: String,
      required: [true, "password is required"]
    },

    is_active: {
      type: Boolean,
      default: true
    },

    is_staff: {
      type: Boolean,
      default: false
    },
    is_superuser: {
      type: Boolean,
      default: false
    },
    last_login: {
      type: Date,
      default: null
    }
  },

  { versionKey: false, timestamps: true }
);

const OktenUser = mongoose.model("oktenUsers", schema);

module.exports = {
  OktenUser
};
