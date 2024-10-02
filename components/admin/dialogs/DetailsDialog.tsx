import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { Tooltip } from "@nextui-org/tooltip";
import { EyeIcon } from "lucide-react";
import { SelectClient, SelectInventory, SelectOrder } from "@/db/schema";

export default function DetailsDialog({ type, item }: { type: string, item: SelectInventory | SelectClient | SelectOrder }) {
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
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

