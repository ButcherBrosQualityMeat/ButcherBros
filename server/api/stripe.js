const router = require('express').Router()
module.exports = router

const keySecret = process.env.sk_test_Slu9Ke92GB9KPYhlsZIwySgU
//determine if keySectret should euqal key alone or include process.env.
const stripe = require('stripe')('sk_test_Slu9Ke92GB9KPYhlsZIwySgU')

router.get('/', async (req, res, next) => {
  try {
    await res.render('index.pug', {
      keySecret
    })
  } catch (err) {
    next(err)
  }
})

router.get('/paysuccess', async (req, res, next) => {
  try {
    await res.render('paysuccess', {})
  } catch (err) {
    next(err)
  }
})

router.post('/charge', async (req, res, next) => {
  try {
    let amount = 500

    await stripe.customers
      .create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
      })
      .then(customer =>
        stripe.charges.create({
          amount,
          description: 'Sample Charge',
          currency: 'usd',
          customer: customer.id
        })
      )
      .then(charge => res.render('charge.pug'))
  } catch (err) {
    next(err)
  }
})

/*
Publishable key goes on front end
pk_test_IKvGHmimQ1OH1sDz6RBtoaBE


Secret key above
sk_test_Slu9Ke92GB9KPYhlsZIwySgU

 */

/*
Using Checkout and Express
Quickly integrate Checkout into your Node.js Express-based site to provide your users with a streamlined, mobile-ready payment experience.

This tutorial demonstrates how to accept payments with Stripe Checkout in a Node.js application built with the Express framework. The application uses Checkout to accept credit cards from the end user and send tokens to a back-end API. The back-end Express route uses the Stripe Node.js library to create a charge. There are four steps:

Install dependencies
Create the Express route
Create the Pug view templates
Run the application
Step 1: Install and configure dependencies
To follow along, you need a Node.js environment with version 6.x or higher. Use npm to install Express and the Stripe library:

Terminal
npm install stripe express pug body-parser
Create a file named app.js and populate it with the necessary imports and configuration values:

const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;

const app = require("express")();
const stripe = require("stripe")(keySecret);

app.set("view engine", "pug");
app.use(require("body-parser").urlencoded({extended: false}));
The file defines two constants, keyPublishable and keySecret. These keys identify your account when you communicate with Stripe. In this example, the application extracts the values from local environment variables in order to cleanly separate configuration from code. Avoid hard-coding API access keys and other sensitive data in your application code.

After you set up the constants, import the Stripe and Express modules. The Stripe module accepts a single parameter, the secret key associated with your account. Next, configure Express to use Pug as the view engine and add the body-parser module, which makes it possible for your POST route to receive parameters from Checkout.

Step 2: Create Express routes
The Express back end exposes two routes:

A GET route that displays the payment form
A POST route that receives the payment token ID and creates the charge
Add the route handlers to the app.js file:

app.get("/", (req, res) =>
  res.render("index.pug", {keyPublishable}));

app.post("/charge", (req, res) => {
  let amount = 500;

  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
         currency: "usd",
         customer: customer.id
    }))
  .then(charge => res.render("charge.pug"));
});

app.listen(4567);
The index route renders the Checkout form and displays it to the user. Pass the publishable key into the render function so that the template can embed it in the Checkout form markup.

The charge route retrieves the email address and card token ID from the POST request body. It uses those parameters to create a Stripe customer. Next, it invokes the stripe.charges.create method, providing the Customer object as an option. The Stripe Node.js client library performs those operations asynchronously, which means that you need to use either callbacks or promises to handle the results and ensure that the functions are invoked in the correct order.

In this example, the application charges the user $5. Stripe expects the developer to describe charges in cents, so compute the value of the amount parameter by multiplying the desired number of dollars by one hundred. Stripe charges also take an optional description parameter, which is “Sample Charge” in this case.

Step 3: Create the view templates
Express supports several different template engines for generating HTML content. This tutorial uses Pug, but you could just as easily use EJS or another compatible engine if you prefer. Create a file named views/index.pug for the index template:

html
  body
    form(action="/charge", method="post")
      article
        label Amount: $5.00
      script(
        src="//checkout.stripe.com/v2/checkout.js",
        class="stripe-button",
        data-key=keyPublishable,
        data-locale="auto",
        data-description="Sample Charge",
        data-amount="500")
To integrate the form, load Checkout in an HTML <script> tag. It adds a button to the form that the user can click to display the credit card overlay. The overlay automatically performs validation and error handling. The action attribute specifies the path of the charge route created in the previous step.

Create a file named views/charge.pug for the template that shows users a message when the charge succeeds:

h2 You successfully paid <strong>$5.00</strong>!
That’s it, a complete Stripe and Express integration in about 60 lines of JavaScript and HTML.

Step 4: Run the application
Run the application from the command line:

Terminal
PUBLISHABLE_KEY=pk_test_IKvGHmimQ1OH1sDz6RBtoaBE SECRET_KEY=sk_test_Slu9Ke92GB9KPYhlsZIwySgU node app.js
Specify values for the publishable and secret key environment variables. The example above is populated with the test keys from your account.

Navigate to the running application in your browser and click the button to launch the payment form. If you’re using Stripe test keys, you can test it with some dummy data. Enter the test number 4242 4242 4242 4242, a three digit CVC, and a future expiry date. Submit the form and see if the application correctly displays the successful charge page. */
