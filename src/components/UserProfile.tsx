import { Avatar, Box, Card } from "@material-ui/core";
import styled from "styled-components";

import React from "react";

interface Props {
  user: { email: String; _id: string; name: string };
}

const UserProfile: React.FC<Props> = ({ user }) => {
  return (
    <UserCard>
      <Box display="flex">
        <Avatar />
        <h4>{user.name}</h4>
      </Box>
    </UserCard>
  );
};

export default UserProfile;

const UserCard = styled(Card)`
  /* height: 4rem; */
`;
