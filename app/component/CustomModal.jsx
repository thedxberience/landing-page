import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const CustomModal = ({
  children,
  isOpen,
  onClose,
  modalHeader,
  bgTransparent = false,
}) => {
  return (
    <Modal size={["sm", "md", "lg", "xl"]} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalHeader}</ModalHeader>
        <ModalCloseButton />
        <ModalBody bg={bgTransparent && "transparent"} mb={"20px"}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
