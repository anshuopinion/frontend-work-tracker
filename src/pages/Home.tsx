import {
  Container,
  Grid,
  GridItem,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { addNewWork, fetchUser, fetchWorks } from "api";
import AddWorkForm from "components/AddWorkForm";
import UserProfile from "components/UserProfile";
import WorkCard from "components/WorkCard";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useStateValue } from "store";
import { IWork } from "Types";

const Home = () => {
  const [{ userId, token }] = useStateValue();
  const history = useHistory();
  useEffect(() => {
    if (!userId && !token) {
      history.replace("/login");
    }
  }, [token, userId, history]);

  const queryClient = useQueryClient();
  //Fetch User Data
  const { isLoading, data: user } = useQuery("user", () => fetchUser(userId));

  //Fetch All works
  const { data: works } = useQuery([user && "works"], () =>
    fetchWorks(user.id)
  );
  //AddNewWork
  const { isLoading: cardLoading, mutateAsync } = useMutation(addNewWork);

  const addWorkHandler = async (workData: IWork) => {
    await mutateAsync({ userId, workData });
    queryClient.invalidateQueries("works");
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {/* <ErrorModal error={error} onClose={isSuccess} /> */}
      <Container maxW="1200px">
        <Grid mt={10} gap={{ base: 2, md: 6 }}>
          <GridItem colSpan={8}>
            <UserProfile user={user} />
          </GridItem>
          <GridItem colSpan={{ base: 8, md: 2 }}>
            <AddWorkForm addWorkHandler={addWorkHandler} />
          </GridItem>
          <GridItem colSpan={{ base: 8, md: 6 }}>
            <Grid gap={{ base: 2, md: 4 }}>
              <AnimateSharedLayout>
                <List as={motion.ul}>
                  <AnimatePresence>
                    {works?.map((work: IWork) => (
                      <ListItem
                        key={work._id}
                        as={motion.li}
                        initial={{ x: "100vw", opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: { damping: 0.1, duration: 0.5 },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <WorkCard data={work} />
                      </ListItem>
                    ))}
                  </AnimatePresence>
                </List>
              </AnimateSharedLayout>
              {cardLoading && <Spinner />}
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
