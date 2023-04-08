const { Schema, model } = require("mongoose");

const Joi = require("joi");

const petSchema = Schema(
  {
    number: {
      type: String,
    },
    nametechnique: {
      type: String,
    },
    serialNumber: {
      type: String,
    },
    datecreation: {
      type: String,
    },
    brend: {
      type: String,
    },
    model: {
      type: String,
    },
    customerName: {
      type: String,
    },
    customerAddress: {
      type: String,
    },
    phone: {
      type: String,
    },
    photo: {
      type: String,
    },
    cost: {
      type: String,
      default: "0",
    },
    descriptionOfRepair: {
      type: String,
      min: 8,
      max: 120,
    },
    descriptionMalfunction: {
      type: String,
      min: 8,
      max: 120,
    },
    status: {
      type: String,
      enum: [
        "in work",
        "done",
        "price negotiation",
        "spare parts order",
        "under warranty",
        "problem client",
        "accepted",
      ],
      default: "accepted",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  number: Joi.string(),
  nametechnique: Joi.string(),
  brend: Joi.string(),
  model: Joi.string(),
  customerName: Joi.string(),
  customerAddress: Joi.string(),
  phone: Joi.string(),
  photo: Joi.string(),
  name: Joi.string().min(2).max(16).required(),
  birthday: Joi.date().required(),
  breed: Joi.string().min(2).max(16).required(),
  comments: Joi.string().min(8).max(120).required(),
});

const Order = model("pets", petSchema);

module.exports = {
  Order,
  joiSchema,
};
