import { Avatar, Box, Card, Button, Typography } from "@material-ui/core";
import styled from "styled-components";

import React from "react";
import { useAuth } from "hooks";
interface Props {
  user: { email: String; _id: string; name: string };
}

const UserProfile: React.FC<Props> = ({ user }) => {
  const { logout } = useAuth();
  return (
    <UserCard>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={1}
      >
        <Box display="flex" alignItems="center" p={1}>
          <Avatar />
          <Box ml={1}>
            <Typography variant="h5">{user.name}</Typography>
          </Box>
        </Box>
        <Box>
          <Button color="primary" variant="contained" onClick={logout}>
            Logout
          </Button>
        </Box>
      </Box>
    </UserCard>
  );
};

export default UserProfile;

const UserCard = styled(Card)`
  /* height: 4rem; */
  width: 100%;
`;
