"use server"
const client = require("twilio")(process.env.TWILLIO_ACC_SID , process.env.TWILLIO_AUTH_TOKEN)

export async function SendSMS(
    number: string, message: string
) {
   const res = await client.messages.create({
    body: message,
    from: "+19787234087",
    to: number
   })
   console.log(res)

}