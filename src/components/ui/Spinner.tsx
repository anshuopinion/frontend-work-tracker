import { CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "@emotion/styled";
const StyledSpinner = styled.div<{ fullPage?: boolean }>`
  height: ${(props) => (props.fullPage ? "100vh" : "100%")};
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Spinner({ fullPage }: { fullPage?: boolean }) {
  return (
    <StyledSpinner fullPage={fullPage}>
      <CircularProgress />
    </StyledSpinner>
  );
}

export default Spinner;
