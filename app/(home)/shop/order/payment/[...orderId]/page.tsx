"use client";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { SubmitPayment } from "@/lib/actions/payment";


export default function Payment({ params }: { params: { orderId: string } }) {
  const appId = "sandbox-sq0idb-OE6rqybV3G0os1lon7lMmQ";
  const locationId = "L20SWSTF15KJ1";
  return (
    <div className="w-dvw h-[90dvh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Payment</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex items-center mb-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden mr-4">
                <img src="https://i.etsystatic.com/22855495/r/il/79724a/2947516037/il_570xN.2947516037_ocui.jpg" alt="Pottery Kit" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Pottery Kit</h3>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500">Price</span>
              <span className="text-lg font-medium">$49.99</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500">Total</span>
              <span className="text-lg font-medium">$49.99</span>
            </div>
          </div>
          <PaymentForm
            applicationId={appId}
            locationId={locationId}
            cardTokenizeResponseReceived={async (token) => {
              const result = await SubmitPayment(token.token, params.orderId[0]);
              console.log(result);
            }}
          >
            <CreditCard />
          </PaymentForm>
        </div>
      </div>
    </div>
  )
}

