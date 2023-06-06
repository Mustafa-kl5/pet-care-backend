const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const User = require("../../models/user");
const StripePaymentPage = async (req, res) => {
  try {
    const userId = req.user;
    const userOrder = req.order;
    const Products = userOrder.products;
    const email = req.email;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      metadata: {
        user_id: userId,
        order_id: userOrder.id,
      },
      line_items: Products.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.productName,
            },
            unit_amount: item.productPrice * 100,
          },
          quantity: item.productQuntity,
        };
      }),
      success_url: "http://localhost:3000/Home",
      cancel_url: "http://localhost:3000/Payment",
    });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};
module.exports = StripePaymentPage;
