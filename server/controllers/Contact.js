const {
  contactFormResponse,
} = require("../mail/templates/contactFormResponse");
const mailSender = require("../utils/mailSender");

exports.contactUsController = async (req, res) => {
  const { firstName, lastName, email, countrycode, phoneNumber, message } =
    req.body;

  try {
    const emailResponse = await mailSender(
      email,
      "Your data send successfully",
      contactFormResponse({
        firstName,
        lastName,
        email,
        countrycode,
        phoneNumber,
        message,
      })
    );
    console.log("emailResponse", emailResponse);
    return res.json({
      success: true,
      message: "Email send successfully",
    });
  } catch (error) {
    console.log("Error", error);
    console.log("Error message :", error.message);
    return res.json({
      success: false,
      message: "Something went wrong...",
    });
  }
};
