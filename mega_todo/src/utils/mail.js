import mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendMail = async (option) => {
  const mailGenrator = new mailgen({
    theme: "default",
    product: {
      name: "mailgen",
      link: "https://mailgen.js/",
    },
  });
  var emailText = mailGenrator.generatePlaintext(option.mailGenContent);
  var emailHTML = mailGenrator.generate(option.mailGenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });
  
  const mail = {
    from: "mail.taskManager@example.com", // sender address
      to: option.email, // list of receivers
      subject: option.subject, // Subject line
      text: emailText, // plain text body
      html: emailHTML, // html body
  }

  try {
    transporter.sendMail(mail)
  } catch (error) {
    console.error("email sending failed", error);
    
  }

};



const emailVerificationMailGenContent = (username, verificationURL) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our app! We're very excited to have you on board.",
      action: {
        instructions: "To get started with our app, please click here:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Verify Your Email",
          link: verificationURL,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

const forgotPsswordMailGenContent = (username, passwordResetURL) => {
  return {
    body: {
      name: username,
      intro: "to change your password chick on this link.",
      action: {
        instructions: "To get started with our app, please click here:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "reset password",
          link: passwordResetURL,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

// sendMail({
//   email: user.email,
//   subject: "aaa",
//   mailGenContent: emailVerificationMailGenContent(username, ``),
// });


