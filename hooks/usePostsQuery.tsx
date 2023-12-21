import {
  QueryFunctionContext,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";

import { getPostById, getPosts, getPostsByUser } from "@/lib/posts";

const DEFAULT_PAGE_LIMIT = 10;
const DEFAULT_INITIAL_PAGE = 1;
const MAX_PAGES = 10;

const fetchPosts = async ({
  pageParam,
}: QueryFunctionContext<string[], number>) => {
  return getPosts({
    limit: DEFAULT_PAGE_LIMIT,
    page: pageParam,
  });
};

export const usePostsQuery = () => {
  const query = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    initialPageParam: DEFAULT_INITIAL_PAGE,
    getNextPageParam: (_, __, lastPageParam) => {
      if (lastPageParam === MAX_PAGES) {
        return undefined;
      }

      return lastPageParam + 1;
    },
    // maxPages: MAX_PAGES,
    select: (dataOptions) => {
      return {
        ...dataOptions,
        pages: {
          posts: dataOptions.pages?.map((item) => item).flatMap((item) => item),
        },
      };
    },
  });

  return {
    ...query,
    posts: query?.data?.pages?.posts ?? [],
  };
};

export const usePostQuery = (id: number) => {
  const query = useQuery({
    queryKey: [id],
    queryFn: () => getPostById({ id }),
    retry: false,
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  return { ...query };
};

export const usePostByUserQuery = (userId: number) => {
  const query = useQuery({
    queryKey: [userId],
    queryFn: () => getPostsByUser({ userId }),
    retry: false,
    enabled: !!userId,
    refetchOnWindowFocus: false,
  });

  return { ...query };
};
