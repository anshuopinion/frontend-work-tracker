import {
  Box,
  CloseButton,
  Flex,
  Heading,
  Progress,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { deleteWork } from "api";

import { Card } from "elements";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { IWork } from "Types";
import Calander from "./ui/Calander";

interface Props {
  data: IWork;
}

const WorkCard: React.FC<Props> = ({ data }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const queryClient = useQueryClient();
  const { isLoading, mutateAsync } = useMutation(deleteWork);

  const removeHandler = async () => {
    await mutateAsync({ workId: data._id });
    queryClient.invalidateQueries("works");
  };
  const toggle = () => {
    setIsCardOpen((prev) => !prev);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Card>
          <Stack>
            <Flex justifyContent="space-between">
              <Box width={7 / 8} onClick={toggle}>
                <Stack as={motion.div}>
                  <Heading as="h6" fontSize={{ base: "md", md: "xl" }}>
                    {data.work_name}
                  </Heading>
                  <Progress backgroundColor={data.work_color} value={50} />
                </Stack>
              </Box>
              <Box as={motion.div} whileTap={{ scale: 1.4 }} onClick={toggle}>
                <FontAwesomeIcon icon={faAngleDown} size="2x" />
              </Box>
              <Box as={motion.div} whileTap={{ scale: 1.4 }}>
                <CloseButton onClick={removeHandler} />
              </Box>
            </Flex>

            <Flex>
              <AnimatePresence>
                {isCardOpen && (
                  <Box
                    as={motion.div}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{
                      height: 0,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                  >
                    <Calander />
                  </Box>
                )}
              </AnimatePresence>
            </Flex>
          </Stack>
        </Card>
      )}
    </>
  );
};

export default WorkCard;
