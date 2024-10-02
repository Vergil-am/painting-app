import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { Tooltip } from "@nextui-org/tooltip";
import { DeleteIcon } from "lucide-react";
import { deleteItem } from "@/lib/actions/inventory";
import { deleteOrder } from "@/lib/actions/orders";
import { deleteUser } from "@/lib/actions/clients";

export default function DeleteDialog({ type, id }: { type: string, id: string }) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  async function handleDelete() {

    switch (type) {
      case "inventory":
        deleteItem(id)
      case "orders":
        deleteOrder(id)
      case "customers":
        deleteUser(id)
    }
    onClose()
  }
  return (
    <>

      <Tooltip color="danger" content="Delete item">
        <Button isIconOnly className="text-danger" variant="light" onPress={onOpen}><DeleteIcon /></Button>
      </Tooltip>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete</ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete this?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" onPress={handleDelete}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

