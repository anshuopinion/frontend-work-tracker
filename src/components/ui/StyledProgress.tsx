import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
interface Props {
  value?: number;
  color?: string;
  height?: string;
}
const StyledProgress: FC<Props> = ({
  value = 10,
  color = "#ccc",
  height = "20px",
}) => {
  return (
    <Box border="1px" borderColor="#ccc">
      <Box height={height} width={`${value}%`} backgroundColor={`${color}`} />
    </Box>
  );
};

export default StyledProgress;
