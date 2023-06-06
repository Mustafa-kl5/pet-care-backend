const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const getPaymentState = async (req, res, next) => {
  try {
    const sig = req.headers["stripe-signature"];
    const payload = req.body;
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        payload,
        sig,
        process.env.END_POINT_STRIPE_KEY
      );
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`);
    }
    const metadata = event.data.object.metadata;
    let userId, orderId;
    let total = 0;
    if (!event.livemode) {
      switch (event.type) {
        case "checkout.session.completed":
          const session = event.data.object;
          userId = session.metadata.user_id;
          orderId = session.metadata.order_id;
          total = session.amount_total;
          break;
        default:
          console.log(`Unknown event type: ${event.type}`);
      }
      const promise = new Promise((resolve, reject) => {
        if (userId && orderId && total) {
          resolve({ userId, orderId, total });
        }
      });
      promise.then((data) => {
        req.userId = data.userId;
        req.orderId = data.orderId;
        req.total = data.total;
        next();
      });
      return;
    }
    next();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getPaymentState;
