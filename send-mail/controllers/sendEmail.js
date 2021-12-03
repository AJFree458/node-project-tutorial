const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const dummySendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "rlij5ncpzcimcahx@ethereal.email",
      pass: "9KAec2t7V4BhE8GaxN",
    },
  });

  let info = await transporter.sendMail({
    from: '"Arthur Freeman" <rthr.frmn@gmail.com>',
    to: "bar@example.com",
    subject: "Hello",
    html: "<h2>Sending Emails With Node.js</h2>",
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "learncode@mail.com", // Change to your recipient
    from: "rthr.frmn@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;
