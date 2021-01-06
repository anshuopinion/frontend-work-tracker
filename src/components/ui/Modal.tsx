import React from "react";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  // ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

interface ModalProps {
  open: boolean;
  onClose: any;
  children: JSX.Element;
}
const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <ChakraModal isOpen={open} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader>Modal Title</ModalHeader> */}
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
