//  const config = require('../config');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

// const mailConfig = {
//   host: config.MAIL_HOST,
//   port: config.MAIL_PORT,
//   secure: config.MAIL_SECURE,
//   auth: {
//     user: config.MAIL_USER,
//     pass: config.MAIL_PASSWORD,
//   },
// };

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_user: 'JekitLakhani',
      api_key: '@Ankit0768',
    },
  })
);
module.exports = transporter;
