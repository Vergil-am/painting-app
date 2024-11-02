import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { Tooltip } from "@nextui-org/tooltip";
import { EyeIcon } from "lucide-react";
import { SelectClient, SelectInventory, SelectOrder } from "@/db/schema";
import Details from "./details";

export default function DetailsDialog({ type, item }: { type: "inventory" | "orders" | "customers", item: SelectInventory | SelectClient | SelectOrder }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  switch (type) {
    case "inventory": console.log(item)
    case "orders": console.log(item)
    case "customers": console.log(item)
  }

  return (
    <>
      <Tooltip content="Details">
        <Button isIconOnly variant="light" onPress={onOpen}>
          <EyeIcon />
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Details</ModalHeader>
              <ModalContent>
                <Details type={type} details={item} />
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>

                </ModalFooter>
              </ModalContent>

            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

