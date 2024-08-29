
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
export async function POST(req: Request, res: Response) {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{
        price: "price_1PsqUhFqhTeUHynlip1GON8R",
        quantity: 1
      }],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/shop/order/payment/success`,
      cancel_url: `${req.headers.get("origin")}/shop/order/payment/failure`,
    })
    return new Response(session.url, {
      status: 200,
    })
  } catch (e) {
    return Response.error()
    // return Response.json()
  }
}
