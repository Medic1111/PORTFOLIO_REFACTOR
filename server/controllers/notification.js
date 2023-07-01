const sendEmail = require("../utils/send_email");
const AppError = require("../utils/app_error");

const notifyControl = async (req, res, next) => {
  const { subject, email, body } = req.body;
  if (!subject || !email || !body) {
    return next(new AppError("All fields required", 422));
  }

  const optionsClient = {
    email,
    subject: "Thank you for your interest.",
    message: `Thanks for contacting me. I will be in touch as soon as possible.\n
  A.Pagano`,
  };
  const message = `${email}: ${body}`;
  const options = { email: `${process.env.EMAIL}`, subject, message };

  await sendEmail(options)
    .then((res) => console.log("Email sent to DEV"))
    .catch((err) => {
      next(new AppError("something went wrong", 500));
    });

  await sendEmail(optionsClient)
    .then((respose) => res.status(200).json("MESSAGE RECEIVED"))
    .catch((err) => {
      next(new AppError("something went wrong", 500));
    });
};

module.exports = { notifyControl };
