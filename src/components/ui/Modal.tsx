import React, { Children, ReactChildren } from "react";
import styled from "styled-components";

import { Modal as M } from "@material-ui/core";
const StyledModal = styled(M)``;
interface ModalProps {
  open: boolean;
  onClose: any;
  children: JSX.Element;
}
const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <StyledModal open={open} onClose={onClose}>
      {children}
    </StyledModal>
  );
};

export default Modal;
