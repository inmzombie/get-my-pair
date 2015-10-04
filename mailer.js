var nodemailer = require("./node_modules/grunt-nodemailer/node_modules/nodemailer/lib/nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP", {
  service: "Gmail",
  auth: {
    XOAuth2: {
      user: "diegogbarros@gmail.com", // Your gmail address.
                                            // Not @developer.gserviceaccount.com
      clientId: "82535716939-tul63qsp3v36f6mo1dbc2qet3ucj05bq.apps.googleusercontent.com",
      clientSecret: "sJZDJMzjkn5zKzL_x5Bj2690",
      refreshToken: "1/Hga6iKI-hTQnZ1KtFRn9XsXuwUWwWbQzFO38Wnu8d05IgOrJDtdun6zK6XiATCKT"
    }
  }
});

var mailOptions = {
  from: "diegogbarros@gmail.com",
  to: "diego.barros@globant.com",
  subject: "Hello",
  generateTextFromHTML: true,
  html: "<b>node</b>"
};

smtpTransport.sendMail(mailOptions, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
  smtpTransport.close();
});
