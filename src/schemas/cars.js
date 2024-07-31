const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = mongoose.Schema(
  {
    brand: {
      type: String,
      default: "BMW"
    },
    price: {
      type: Number,
      default: "1000"
    },
    year: {
      type: Number,
      default: "2000"
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OktenUser",
      required: true
    }
  },

  { versionKey: false, timestamps: true }
);

const Cars = mongoose.model("cars", schema);

module.exports = {
  Cars
};
