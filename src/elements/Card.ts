import { chakra } from "@chakra-ui/react";
const Card = chakra("div", {
  // attach style props
  baseStyle: {
    px: "4",
    py: "5",
    rounded: "sm",
    shadow: "base",
    // boxShadow: "0px 0px 6px  rgba(0,0,0,0.2)",
  },
});

export default Card;
