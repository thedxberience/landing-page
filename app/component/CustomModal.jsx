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
    <Modal size={["sm"]} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={"fit-content"}>
        <ModalHeader pr={"40px"}>{modalHeader}</ModalHeader>
        <ModalCloseButton />
        <ModalBody bg={bgTransparent && "transparent"} mb={"20px"}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
