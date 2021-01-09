import { Container, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { fetchUser, fetchWorks } from "api";
import AddWorkForm from "components/AddWorkForm";
import UserProfile from "components/UserProfile";
import WorkCard from "components/WorkCard";
import { AnimateSharedLayout } from "framer-motion";

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

  const { isLoading, data: user } = useQuery("user", () => fetchUser(userId));
  const { data: works } = useQuery([user && "works"], () =>
    fetchWorks(user.id)
  );

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
            <AddWorkForm />
          </GridItem>
          <GridItem colSpan={{ base: 8, md: 6 }}>
            <Grid gap={{ base: 2, md: 4 }}>
              <AnimateSharedLayout>
                {works?.map((work: IWork) => (
                  <WorkCard key={work._id} data={work} />
                ))}
              </AnimateSharedLayout>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
