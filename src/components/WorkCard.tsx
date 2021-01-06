import { Box, Flex, Heading, Progress, Stack } from "@chakra-ui/react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "elements";
import React from "react";

const WorkCard: React.FC = () => {
  return (
    <>
      <Card>
        <Flex justifyContent="space-between">
          <Box width={7 / 8}>
            <Stack>
              <Heading as="h6" fontSize={{ base: "md", md: "xl" }}>
                Learing Figma
              </Heading>
              <Progress colorScheme="red" value={50} />
            </Stack>
          </Box>
          <FontAwesomeIcon icon={faAngleDown} />
        </Flex>
      </Card>
    </>
  );
};

export default WorkCard;
