import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
interface ErrorModalProps {
  error: any;
}
const ErrorModal: React.FC<ErrorModalProps> = ({ error }) => {
  const [modalState, setModalState] = useState(!!error);

  const closeModal = () => {
    setModalState(false);
  };
  return (
    <>
      <Modal isOpen={modalState} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Error Screen</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{error}</ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ErrorModal;
// open={!!error}
// onClose={onClose}
