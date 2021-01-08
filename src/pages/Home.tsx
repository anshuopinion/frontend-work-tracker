import {
  Box,
  Container,
  grid,
  Grid,
  GridItem,
  SimpleGrid,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { fetchUser } from "api";
import AddWorkForm from "components/AddWorkForm";
import UserProfile from "components/UserProfile";
import WorkCard from "components/WorkCard";
import { Card } from "elements";
// import ErrorModal from "components/ui/ErrorModal";
// import AddWorkForm from "components/AddWorkForm";
// import ErrorModal from "components/ui/ErrorModal";

// import UserProfile from "components/UserProfile";
// import WorkCard from "components/WorkCard";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { useStateValue } from "store";
import { IWork as Iwork } from "Types";

interface IWork extends Iwork {
  _id: string;
}

const Home = () => {
  const [{ userId, token }] = useStateValue();
  const history = useHistory();
  useEffect(() => {
    if (!userId && !token) {
      history.replace("/login");
    }
  }, [token, userId, history]);

  const { isLoading, data, error, isSuccess } = useQuery("user", () =>
    fetchUser(userId)
  );

  console.log(data);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {/* <ErrorModal error={error} onClose={isSuccess} /> */}
      <Container maxW="1200px">
        <Grid mt={10} gap={{ base: 2, md: 6 }}>
          <GridItem colSpan={8}>
            <UserProfile user={data} />
          </GridItem>
          <GridItem colSpan={{ base: 8, md: 2 }}>
            <AddWorkForm />
          </GridItem>
          <GridItem colSpan={{ base: 8, md: 6 }}>
            <Grid gap={{ base: 2, md: 4 }}>
              {data.works &&
                data.works.map((work: IWork) => (
                  <WorkCard key={work._id} data={work} />
                ))}
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
