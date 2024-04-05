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
    <Modal size={["sm", "lg"]} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"transparent"} w={"fit-content"}>
        <ModalHeader pr={"40px"} color={"white"}>
          {modalHeader}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody bg={bgTransparent && "transparent"} mb={"20px"}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
