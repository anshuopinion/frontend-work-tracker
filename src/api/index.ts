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

export const addNewWork = async ({ userId, workData }: IAddNewWork) => {
  if (userId !== null) {
    const { data } = await axios.post(`/work/create/${userId}`, workData);
    return data;
  }
};

export const fetchWorks = async (userId: string) => {
  if (userId !== null) {
    const { data } = await axios.get(`/work/all/${userId}`);
    return data;
  }
};
