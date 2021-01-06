import { chakra } from "@chakra-ui/react";
const Card = chakra("div", {
  // attach style props
  baseStyle: {
    px: "4",
    py: "5",
    rounded: "sm",
    shadow: "lg",
  },
});

export default Card;
