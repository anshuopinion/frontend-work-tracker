import axios from "axios";
interface LoginProps {
  username: string;
  password: string;
}
interface LoginRes {
  jwt: string;
  userId: string;
}

export const userLogin = ({ username, password }: LoginProps) => {
  const data: LoginRes | undefined = axios.post("/user/signin", {
    username,
    password,
  });

  return data;
};
