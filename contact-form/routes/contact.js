const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 465, 
  secure: true, //true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});


// GET /contact
router.get('/', (req, res) => {
  res.render('contact', {
    title: "Contact Form",
    submitted: false,
  });
});

// POST /contact
router.post('/', (req, res) => {
  transporter
    .sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `New Contact from ${req.body.name}`,
      html: `<b>New Contact</b><br>
    <b>Email:</b> ${req.body.email}<br>
    <b>Name:</b> ${req.body.name}<br>
    <b>Comments:</b> ${req.body.comments}<br>
    `, // html body
    })
    .then((status) => {
      console.log(status);

      res.render('contact', {
        title: 'Thank You',
        submitted: true,
      });
    });
});

module.exports = router;