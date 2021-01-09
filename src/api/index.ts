import { IWork } from "Types";
import axios from "./axios";

export const fetchUser = async (userId: string | null) => {
  if (userId !== null) {
    const { data } = await axios.get(`user/${userId}`);

    return data;
  }
};

interface IAddNewWork {
  userId: string | null;
  workData: IWork;
}
interface IDeleteWork {
  workId?: string;
}
export const addNewWork = async ({ userId, workData }: IAddNewWork) => {
  if (userId !== null) {
    const { data } = await axios.post(`/work/create/${userId}`, workData);
    return data;
  }
};

export const deleteWork = async ({ workId }: IDeleteWork) => {
  await axios.delete(`/work/remove/${workId}`);
  return null;
};

export const fetchWorks = async (userId: string) => {
  if (userId !== null) {
    const { data } = await axios.get(`/work/all/${userId}`);
    return data;
  }
};
