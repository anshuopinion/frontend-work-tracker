import React from "react";
// import { useAuth } from "hooks";
interface Props {
  user: { email: String; _id: string; name: string };
}

const UserProfile: React.FC<Props> = ({ user }) => {
  // const { logout } = useAuth();
  return (
    <div>
      {/* <Box
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
      </Box> */}
    </div>
  );
};

export default UserProfile;
