import { Box, Container } from "@material-ui/core";
import { fetchUser } from "api/fetchUser";
import AddWorkForm from "components/AddWorkForm";
// import ErrorModal from "components/ui/ErrorModal";
import Spinner from "components/ui/Spinner";
import UserProfile from "components/UserProfile";
import React from "react";
import { useQuery } from "react-query";
import { useStateValue } from "store";

const Home = () => {
  const [{ userId }] = useStateValue();

  const { isLoading, isError, data } = useQuery("user", fetchUser(userId));
  console.log(data);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {/* <ErrorModal error={isError} onClose={} /> */}
      <Container>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <AddWorkForm />
          </Box>
          <Box>
            <UserProfile />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
