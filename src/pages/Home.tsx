import { Container, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { addNewWork, fetchUser, fetchWorks } from "api";
import AddWorkForm from "components/AddWorkForm";
import UserProfile from "components/UserProfile";
import WorkCard from "components/WorkCard";

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
              {works?.map((work: IWork) => (
                <WorkCard key={work._id} data={work} />
              ))}
              {cardLoading && <Spinner />}
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
