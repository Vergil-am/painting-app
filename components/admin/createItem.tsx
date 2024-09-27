"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Plus } from "lucide-react";
import { addInventory } from "@/lib/actions/inventory";
import { Toaster, toast } from "react-hot-toast";
export default function CreateItem() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  async function SubmitItem(data: FormData) {
    const item = addInventory({
      item_name: data.get("name") as string,
      quantity: parseInt(data.get("quantity") as string ?? 1),
      threshold: 100
    })
    toast.promise(item, {
      loading: "loading ...",
      success: "Order created successfully",
      error: "An error occured processing your order"
    })
    onOpenChange()
  }

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
      <Button onPress={onOpen} variant="ghost" >Add new Item <Plus /> </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add item</ModalHeader>
              <form action={SubmitItem}>
                <ModalBody>
                  <Input
                    autoFocus
                    label="Item name"
                    placeholder=""
                    variant="bordered"
                    name="name"
                  />
                  <Input
                    label="Quantity"
                    defaultValue="1"
                    type="number"
                    variant="bordered"
                    name="quantity"
                  />
                  <Input
                    label="Image"
                    type="file"
                    variant="bordered"
                    placeholder=" "
                    name="image"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit">
                    Add
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal >
    </>
  )
}

