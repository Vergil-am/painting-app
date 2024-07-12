"use client"

import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";


export default function ChangePassword() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button className="bg-foreground text-background" onPress={onOpen}>Change password</Button>
      <Modal hideCloseButton backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Change password</ModalHeader>
              <ModalBody>
                <Input
                  variant="bordered"
                  size="sm"
                  type="password"
                  label="Current password"
                />
                <Input
                  variant="bordered"
                  size="sm"
                  type="password"
                  label="New password"
                />
                <Input
                  variant="bordered"
                  size="sm"
                  type="password"
                  label="Confirm new password"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-foreground text-background" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>    </>
  )
}

