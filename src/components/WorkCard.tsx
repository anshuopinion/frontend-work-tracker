import {
  Box,
  CloseButton,
  Flex,
  Grid,
  Heading,
  Spinner,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { deleteWork } from "api";

import { Card } from "elements";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { IWork } from "Types";
// import Calander from "./ui/Calander";
import StyledProgress from "./ui/StyledProgress";

interface Props {
  data: IWork;
}

const dropDownVariants = {
  start: {
    height: 0,
  },
  expand: { height: "auto" },
  exit: {
    height: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const WorkCard: React.FC<Props> = ({ data }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const days = [];
  const queryClient = useQueryClient();
  const { isLoading, mutateAsync } = useMutation(deleteWork);

  const removeHandler = async () => {
    await mutateAsync({ workId: data._id });
    await queryClient.invalidateQueries("works");
  };
  const toggle = () => {
    setIsCardOpen((prev) => !prev);
  };

  // * create array of dates
  if (data.createdAt) {
    const initialDate = new Date(data?.createdAt);
    const yesterday = new Date(initialDate.setDate(initialDate.getDate() - 1));
    for (let i = 0; i <= data.total_days!; i++) {
      const day = new Date(
        yesterday.setDate(yesterday.getDate() + 1)
      ).toLocaleDateString();

      days.push({ date: day });
    }
  }

  return (
    <>
      {/* {isLoading ? (
        <Spinner />
      ) : ( */}
      <Card
        as={motion.div}
        initial="start"
        animate="expand"
        mb={2}
        variants={dropDownVariants}
      >
        <Stack>
          <Flex justifyContent="space-between">
            <Box width={7 / 8} onClick={toggle}>
              <Stack as={motion.div}>
                <Heading as="h6" fontSize={{ base: "md", md: "xl" }}>
                  {data.work_name}
                </Heading>
                <StyledProgress
                  color={`${data.work_color}`}
                  height={`1.4rem`}
                />
              </Stack>
            </Box>
            <Box as={motion.div} whileTap={{ scale: 1.4 }} onClick={toggle}>
              <FontAwesomeIcon icon={faAngleDown} size="2x" />
            </Box>
            <Box as={motion.div} whileTap={{ scale: 1.4 }}>
              {isLoading ? (
                <Spinner />
              ) : (
                <CloseButton onClick={removeHandler} />
              )}
            </Box>
          </Flex>

          <Flex>
            <AnimatePresence exitBeforeEnter>
              {isCardOpen && (
                <Box
                  layout
                  as={motion.div}
                  initial="start"
                  animate="expand"
                  exit="exit"
                >
                  <Grid
                    variants={dropDownVariants}
                    as={motion.div}
                    templateColumns="repeat(20,1fr)"
                    // gridAutoColumns="repeat(50,1fr)"
                    // gridAutoFlow="column"
                    gap="5px"
                  >
                    {/* FIX:layout delay in child element */}
                    {days.map((day, i) => (
                      <Link
                        to={`/perdaywork/${data.work_name
                          .split(" ")
                          .join("-")}/${day.date}`}
                        key={i}
                      >
                        <Tooltip label={day.date} aria-label="A tooltip">
                          <Box bg="#ccc" w={4} h={4} mr={1} />
                        </Tooltip>
                      </Link>
                    ))}
                  </Grid>
                </Box>
              )}
            </AnimatePresence>
          </Flex>
        </Stack>
      </Card>
      {/* )} */}
    </>
  );
};

export default WorkCard;
