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
    photo: {
      type: String,
      default:
        "https://img.goodfon.ru/original/2360x1640/7/8a/bnw-f82-m44-series-coupe.jpg"
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
