import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
interface ErrorModalProps {
  error: string | null;
  onClose: any;
}
const ErrorModal: React.FC<ErrorModalProps> = ({ error, onClose }) => {
  return (
    <>
      <Modal isOpen={!!error} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Error Screen</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{error}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ErrorModal;
// open={!!error}
// onClose={onClose}
