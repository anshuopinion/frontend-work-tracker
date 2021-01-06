import { Flex } from "@chakra-ui/react";
import { Card } from "elements";
import { FC } from "react";

const LSCard: FC = ({ children }) => {
  return (
    <Flex
      mx="auto"
      flexDirection="column"
      color="mainD"
      maxWidth="30rem"
      my="2rem"
    >
      <Card
        rounded={{ base: "none", md: "lg" }}
        shadow={{ base: "none", md: "md" }}
      >
        {children}
      </Card>
    </Flex>
  );
};

export default LSCard;
