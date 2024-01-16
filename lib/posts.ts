import axiosInstance from "./axiosInstance";

import { SOMETING_WENT_WRONG } from "@/constants";
import { Post } from "@/interfaces/posts";

export const getPosts = async ({
  page = 1,
  limit = 20,
}: {
  page?: number;
  limit?: number;
}) => {
  try {
    // add a delay in the request to show the infinite query
    if (page > 1) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    }

    const { data } = await axiosInstance({
      url: "/posts",
      method: "GET",
      params: {
        _limit: limit,
        _page: page,
      },
    });

    return data as Post[];
  } catch (error) {
    throw new Error(SOMETING_WENT_WRONG);
  }
};

export const getPostById = async ({ id }: { id: number }) => {
  try {
    const { data } = await axiosInstance({
      url: `/posts/${id}`,
      method: "GET",
      params: {
        _embed: "comments",
      },
    });

    return data as Post;
  } catch (error) {
    throw new Error(SOMETING_WENT_WRONG);
  }
};

export const getPostsByUser = async ({ userId }: { userId: number }) => {
  try {
    const { data } = await axiosInstance({
      url: `/users/${userId}/posts`,
      method: "GET",
      params: {
        _embed: "comments",
      },
    });

    return data as Post[];
  } catch (error) {
    throw new Error(SOMETING_WENT_WRONG);
  }
};
