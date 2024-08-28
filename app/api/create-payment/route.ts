
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
export async function POST(req: Request) {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{
        price: "price_1PsqUhFqhTeUHynlip1GON8R",
        quantity: 1
      }],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/?success=true`,
      cancel_url: `${req.headers.get("origin")}/?canceled=true`,
    })
    console.log(session.url)
    // return Response.redirect(session.url, 302)
    return Response.redirect(session.url, 302)
  } catch (e) {
    return Response.error()
    // return Response.json()
  }
}
