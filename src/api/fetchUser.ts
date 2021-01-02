import axios from "./axios";

export const fetchUser = async (userId: string | null) => {
  if (userId !== null) {
    const { data } = await axios.get(`user/${userId}`);

    return data;
  }
};
