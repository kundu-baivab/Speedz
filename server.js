require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = 3001; // Choose your desired port

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2020-08-27",
// });

// console.log(process.env.STRIPE_SECRET_KEY)

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Route handler for creating payment intents
app.post("/payment", async (req, res) => {
  try {
    const { amount,name,email } = req.body;

    // const session = await stripe.checkout.sessions.create({
    //   payment_method_type: ["card"],
    //   line_items: req.body.items.map(item=>{
    //     return{
    //         price_data:{
    //             currency:'inr',
    //             product_data:{
    //                 name:item.name,
    //             },
    //             unit_amount:(item.price)*100,
    //         },
    //         quantity:item.quantity
    //     }
    //   }),
    //   mode: "payment",
    //   success_url: "http://localhost:5173/",
    //   cancel_url: "http://localhost:5173/payment",
    // });

    // console.log(session.url)

    // res.json({url:session.url})

    const customer = await stripe.customers.create({
      name: name,
      email: email,
      address:{
        city:'New York',
        country:'US',
        line1:'13th Street',
        line2:'47 W 13th St, New York',
        postal_code:'10011',
        state:'New York State'
      }
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount)*100,
      currency: 'inr',
      customer:customer.id,
      description: `The total amount is Rs ${amount}`,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.status(200).json({ client_secret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
