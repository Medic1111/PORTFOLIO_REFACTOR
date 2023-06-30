require("dotenv").config();

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXECEPTION: ", err.name, err.message);
  process.exit(1);
});

const app = require("./app");
const PORT = (process.env.NODE_ENV = "development" ? 3002 : process.env.PORT);

const server = app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("SERVER SPINNING")
);

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION: ", err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
