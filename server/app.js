// GENERAL PACKAGES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const AppError = require("./utils/app_error");
require("dotenv").config();

const app = express();

// MIDDLEWARES:
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.originAgentCluster());
app.use(helmet.referrerPolicy());

const limiter = rateLimit({
  max: 100,
  window: 60 * 60 * 1000,
  message: "Too many requests from this IP, try again in an hour",
});
app.use("/api", limiter);
process.env.NODE_ENV === "development" && app.use(morgan("dev"));
app.use(express.json({ limit: "10kb" }));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:4173",
      "https://www.pagano.dev",
    ],
    credentials: true,
    methods: ["POST"],
  })
);

app.use(express.static(path.resolve(__dirname, "../client/dist")));

// PERSONAL MIDDLEWARES
const errHandler = require("./utils/err_handler");
const notifyRoute = require("./routes/notification");

// ROUTES
app.use("/", notifyRoute);

// UNIVERSAL/UNHANDLED ROUTES
if (process.env.NODE_ENV === "production") {
  app.all("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"))
  );
} else {
  app.all("*", (req, res, next) => {
    next(new AppError(`${req.originalUrl} is not supported`, 404));
  });
}

// ERR MIDDLEWARE/CONTROLLER
app.use(errHandler);

module.exports = app;
