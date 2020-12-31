import axios from "../axios";

export const fetchUser = (userId: string | null) => {
  const { data } = axios.get(`user/${userId}`);
  console.log(userId);

  return data;
};
