// GENERAL PACKAGES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const AppError = require("./utils/app_error");
const sendEmail = require("./utils/send_email");
require("dotenv").config();

const app = express();

// MIDDLEWARES:
app.use(helmet());

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

// app.post("/api/v1/notification", async (req, res, next) => {
//   const { subject, email, body } = req.body;
//   if (!subject || !email || !body) {
//     return next(new AppError("All fields required", 422));
//   }

//   const optionsClient = {
//     email,
//     subject: "Thank you for your interest.",
//     message: `Thanks for contacting me. I will be in touch as soon as possible.\n
//   A.Pagano`,
//   };
//   const message = `${email}: ${body}`;
//   const options = { email: `${process.env.EMAIL}`, subject, message };

//   await sendEmail(options)
//     .then((res) => console.log("Email sent to DEV"))
//     .catch((err) => {
//       next(new AppError("something went wrong", 500));
//     });

//   await sendEmail(optionsClient)
//     .then((respose) => res.status(200).json("MESSAGE RECEIVED"))
//     .catch((err) => {
//       next(new AppError("something went wrong", 500));
//     });
// });

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
