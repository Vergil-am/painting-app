import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { Tooltip } from "@nextui-org/tooltip";
import { EditIcon } from "lucide-react";
import { SelectInventory, SelectClient, SelectOrder } from "@/db/schema";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Selection } from "@nextui-org/table"
import { ChangeStatus } from "@/lib/actions/orders";
import { useState, useMemo } from "react";

export default function EditDialog({ type, item }: { type: "inventory" | "orders" | "customers", item: SelectInventory | SelectClient | SelectOrder }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["Unpaid"]));
  switch (type) {

    case "orders": {
      const order = item as SelectOrder
      setSelectedKeys(new Set([order.status || "Unpaid"]))
      async function updateStatus() {
        const status = selectedKeys
        console.log(selectedKeys)
        console.log(status)
        // await ChangeStatus(order.id,)
      }
      return (
        <>
          <Tooltip content="Edit item">
            <Button isIconOnly variant="light" onPress={onOpen}>
              <EditIcon />
            </Button>
          </Tooltip>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Edit status</ModalHeader>
                  <ModalBody>
                    <Dropdown >
                      <DropdownTrigger>
                        <Button>
                          Change status
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                      >
                        <DropdownItem key={"Unpaid"}>Unpaid</DropdownItem>
                        <DropdownItem key={"Paid"}>Paid</DropdownItem>
                        <DropdownItem key={"Shipped"}>Shipped</DropdownItem>
                        <DropdownItem key={"Glazed"}>Glazed</DropdownItem>
                        <DropdownItem key={"Delivered"}>Delivered</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={() => {
                      updateStatus()
                      onClose
                    }}>
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
    case "customers": {

      item as SelectClient
      return (
        <>
          <Tooltip content="Edit item">
            <Button isIconOnly variant="light" onPress={onOpen}>
              <EditIcon />
            </Button>
          </Tooltip>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Edit customer</ModalHeader>
                  <ModalBody>
                  </ModalBody>
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
    case "inventory": {
      item as SelectInventory
      return (

        <>
          <Tooltip content="Edit item">
            <Button isIconOnly variant="light" onPress={onOpen}>
              <EditIcon />
            </Button>
          </Tooltip>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Edit Item</ModalHeader>
                  <ModalBody>
                  </ModalBody>
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
  }


}

