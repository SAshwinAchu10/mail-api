var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require('nodemailer');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/email", function(req, res) {
  const to = req.body.to;
  const subject = req.body.subject;
  const text = req.body.text;

  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "developer.event10@gmail.com",
      pass: "Xyz09876"
    }
  });
  console.log("saaa", req.body);
  var mailOptions = {
    from: "developer.event10@gmail.com",
    to: to,
    subject: subject,
    text: text
  };
  console.log("asasasas", req.body);
  transporter.sendMail(mailOptions).then((resa) => {
      console.log("?", resa)
    res.json("done");
  });
});

app.listen(8000, function(response) {
  console.log("Running");
});
