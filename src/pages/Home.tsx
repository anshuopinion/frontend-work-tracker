import { Spinner } from "@chakra-ui/react";
import { fetchUser } from "api";
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

  const { isLoading, data } = useQuery("user", () => fetchUser(userId));

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {/* <ErrorModal error={isError} onClose={} /> */}
      {/* <Container> */}
      {/* <Grid container spacing={2}>
          <Grid item xs={3}>
            <AddWorkForm />
          </Grid>
          <Grid item xs={9}>
            <Card>
              <Grid container xs={12}>
                <UserProfile user={data} />
              </Grid>
              <WorkCard />
            </Card>
          </Grid>
        </Grid> */}
      {/* </Container> */}
    </>
  );
};

export default Home;
