"use server"
import { Client, Environment } from "square"
import { payOrder } from "./orders"






const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox
})


export async function SubmitPayment(sourceId: string | undefined, orderId: string) {
  console.log("sourceId : ", sourceId)
  console.log("order id : ", orderId)
  try {
    if (sourceId != undefined) {
      const { result } = await paymentsApi.createPayment({
        idempotencyKey: orderId,
        sourceId: sourceId,
        amountMoney: {
          currency: "USD",
          amount: BigInt(100)
        }
      })

      payOrder(orderId)
      return result
    } else {
      throw new Error("No source id found")
    }

  } catch (e) {
    console.log(e)
  }
}
