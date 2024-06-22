const express = require("express");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");
const { analyticsController } = require("../../controllers");

const googleAnalyticsRouter = express.Router();

googleAnalyticsRouter.get("/", ctrlWrapper(analyticsController.analytics));
