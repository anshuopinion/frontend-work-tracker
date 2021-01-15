import { Flex } from "@chakra-ui/react";
import { Card } from "elements";
import { motion } from "framer-motion";
import { FC } from "react";

const LSCard: FC = ({ children }) => {
  return (
    <Flex
      mx="auto"
      flexDirection="column"
      color="mainD"
      maxWidth="30rem"
      my="2rem"
      as={motion.div}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {
          y: "-100vh",
          scale: 0,
        },
        show: {
          y: 0,
          scale: 1,
          transition: { duration: 0.5 },
        },
      }}
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
