"use client"

import { auth } from "@/auth"
import { Button } from "@nextui-org/button"
import { signIn, useSession } from "next-auth/react"
import { Modal, useDisclosure, ModalContent, ModalBody, ModalHeader, ModalFooter } from "@nextui-org/modal"
import { Input } from "@nextui-org/input"
import { createOrder } from "@/lib/actions/orders"

export default function OrderButton() {
  const session = useSession()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  function handleOrder() {
    if (session.status == "unauthenticated") {
      signIn()
    } else if (session.status == "authenticated") {
      onOpen()
    }
  }
  function submitOrder(data: any) {
    console.log(data)

  }
  return (
    <>
      <Button
        disabled={session.status == "loading"}
        onClick={handleOrder}>
        Order Now
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <form action={async (data) => {
              const order = {
                client_id: session.data?.user?.id,
                status: "pending",
              }

              await createOrder(order)
            }}>
              {/* <ModalHeader className="flex flex-col gap-1">Place your order</ModalHeader> */}

              <ModalHeader className="flex flex-col gap-1">Are you sure you wanna continue?</ModalHeader>
              {/* <ModalBody> */}
              {/*   <Input */}
              {/*     endContent={ */}
              {/*       <></> */}
              {/*       // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" /> */}
              {/*     } */}
              {/*     defaultValue={session.data?.user?.name ?? undefined} */}
              {/*     label="Full name" */}
              {/*     name="name" */}
              {/*     placeholder="Enter your full name" */}
              {/*     variant="bordered" */}
              {/*   /> */}
              {/*   <Input */}
              {/*     endContent={ */}
              {/*       <></> */}
              {/*       // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" /> */}
              {/*     } */}
              {/**/}
              {/*     defaultValue={session.data?.user?.email ?? undefined} */}
              {/*     label="Email" */}
              {/*     name="email" */}
              {/*     placeholder="Enter your email" */}
              {/*     variant="bordered" */}
              {/*   /> */}
              {/*   <Input */}
              {/*     endContent={ */}
              {/*       <></> */}
              {/*       // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" /> */}
              {/*     } */}
              {/*     label="Phone number" */}
              {/*     name="phone" */}
              {/*     placeholder="Enter your Phone number" */}
              {/*     variant="bordered" */}
              {/*   /> */}
              {/* </ModalBody> */}
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit"
                // onPress={onClose}
                >
                  Place order
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>

  )
}

