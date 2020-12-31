import axios from "axios";
interface SignupProps {
  name: string;
  username: string;
  password: string;
}
interface SignupRes {
  jwt: string;
  userId: string;
}

export const userSignup = ({ username, password, name }: SignupProps) => {
  const data: SignupRes | undefined = axios.post("/user/signin", {
    username,
    password,
  });

  return data;
};
