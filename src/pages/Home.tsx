import {
  Box,
  Container,
  Grid,
  GridItem,
  SimpleGrid,
  Spinner,
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

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {/* <ErrorModal error={error} onClose={isSuccess} /> */}
      <Container maxW="1200px">
        <Grid templateColumns="3fr 7fr" gap={2}>
          <GridItem>
            <AddWorkForm />
          </GridItem>
          <GridItem>
            <GridItem>
              <UserProfile user={data} />
            </GridItem>
            <WorkCard />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
