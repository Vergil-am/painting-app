"use client"
import { createOrder } from "@/lib/actions/orders";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select"
import { signIn, useSession } from "next-auth/react";
import { Toaster, toast } from "react-hot-toast"



export default function OrderPage({ searchParams }: { searchParams: { step: string } }) {
  const session = useSession()
  if (session.status == "loading") {
    return (
      <div>Loading ...</div>
    )
  }
  if (session.status == "unauthenticated") {
    signIn()
  }
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            // theme: {
            //   primary: 'green',
            //   secondary: 'black',
            // },
          },
        }}
      />
      <div className="w-dvw h-[90dvh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8">Place your order</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden mr-4">
                  <img src="https://generated.vusercontent.net/placeholder.svg" alt="Pottery Kit" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Pottery Kit</h3>
                  <div className="flex items-center">
                    <label htmlFor="quantity" className="mr-2">
                      Quantity:
                    </label>
                    <Select
                      variant="bordered"
                      aria-label="quantity"
                      defaultSelectedKeys={numbers}
                      className="w-20"
                    >
                      {numbers.map((num) => {
                        return (
                          <SelectItem textValue={num.toString()} key={num}>{num}</SelectItem>

                        )
                      })}
                    </Select>
                  </div>
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
            <div className="rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
              <form
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                action={async (data) => {
                  const order = {
                    client_id: session.data?.user?.id as string,
                    name: data.get("name") as string,
                    email: data.get("email") as string,
                    phone: data.get("phone") as string,
                    address: data.get("address") as string,
                  }
                  const sumbitOrder = createOrder(order)
                  toast.promise(sumbitOrder, {
                    loading: "loading ...",
                    success: "Order created successfully",
                    error: "An erro occured processing your order"
                  }
                  )
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                    Name
                  </label>
                  <Input name="name" id="name" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
                    Address
                  </label>
                  <Input name="address" id="address" placeholder="123 Main St" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                    Email
                  </label>
                  <Input name="email" id="email" placeholder="something@email.com" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                    Phone
                  </label>
                  <Input name="phone" id="phone" placeholder="+1 (555) 555-5555" required />
                </div>
                <div></div>
                <Button type="submit">Order</Button>
              </form>

            </div>

          </div>
        </div>

      </div>
    </>
  )
}

