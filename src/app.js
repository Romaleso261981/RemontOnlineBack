const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const authRouter = require("./routes/auth/userRouter");
const userRouter = require("./routes/user/userRouter");
const orderRouter = require("./routes/order/orderRouter");
const carsRouter = require("./routes/cars/carsRouter");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/cars", carsRouter);
app.use("/orders", orderRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
