import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendmail = async (mssg) => {
  try {
    await sgMail.send(mssg);
  } catch (error) {
    console.log("error: " + error);
  }
};

export default sendmail;