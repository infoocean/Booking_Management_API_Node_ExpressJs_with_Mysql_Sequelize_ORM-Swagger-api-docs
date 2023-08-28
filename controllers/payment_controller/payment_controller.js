require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.AcceptPaymentController = async (req, res) => {
  //order det
  const { product_items, success_page_url, cancel_page_url } = req.body;
  const blankarr = [];
  const arrlength = product_items.length;
  for (let i = 0; i <= arrlength - 1; i++) {
    blankarr.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: product_items[i].item_name,
        },
        unit_amount: product_items[i].amount * 100,
      },
      quantity: product_items[i].quantity,
    });
  }
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: blankarr,
      mode: "payment",
      success_url: `${success_page_url}/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${cancel_page_url}/paymentcancel`,
    });
    res.status(201).json({ success: true, paymentlink: session.url });
  } catch (error) {
    console.log(error);
  }
};

exports.GetpaymentDetailsController = async (req, res) => {
  const { cs_test_key } = req.body;
  if (!cs_test_key) {
    return res
      .status(400)
      .json({ success: false, message: "cs_test_key is required" });
  }
  try {
    stripe.checkout.sessions.listLineItems(
      cs_test_key,
      { limit: 5 },
      function (err, lineItems) {
        res.status(200).json({ success: true, orderdetails: lineItems });
      }
    );
  } catch (error) {
    console.log(error);
  }
};
