const Razorpay = require("razorpay");

console.log("inside razorpay config")

exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});
console.log("KEY:", process.env.RAZORPAY_KEY);