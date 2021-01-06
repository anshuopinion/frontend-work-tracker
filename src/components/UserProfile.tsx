import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { Card } from "elements";
import { useAuth } from "hooks";
import React from "react";
// import { useAuth } from "hooks";
interface Props {
  user: { email: String; _id: string; name: string };
}

const UserProfile: React.FC<Props> = ({ user }) => {
  const { logout } = useAuth();
  return (
    <>
      <Card py={2}>
        <Flex justifyContent="space-between">
          <Flex alignItems="center" justifyContent="space-between">
            <Avatar />
            <Text ml={2}>{user.name}</Text>
          </Flex>
          <Button onClick={logout}>Logout</Button>
        </Flex>
      </Card>
    </>
  );
};

export default UserProfile;
