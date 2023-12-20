import axiosInstance from "./axiosInstance";

import { SOMETING_WENT_WRONG } from "@/constants";
import { User } from "@/interfaces";

export const getUsers = async () => {
  try {
    const { data } = await axiosInstance({
      url: "/users",
      method: "GET",
    });

    return data as User[];
  } catch (error) {
    throw new Error(SOMETING_WENT_WRONG);
  }
};
