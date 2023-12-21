import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";

import { getPosts } from "@/lib/posts";

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

export const usePostsOptions = () => {
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
