"use client";
import { useRouter } from "next/navigation";

import { Box, CircularProgress, Grid } from "@mui/material";

import { PostCard } from "@/components/Cards";
import { usePostsQuery, useScrollDetector } from "@/hooks";

export default function Home() {
  // Router
  const router = useRouter();

  // Queries
  const { posts, fetchNextPage, isLoading, isFetchingNextPage } =
    usePostsQuery();

  // Custom functions
  const handleNearBottom = () => {
    if (!isFetchingNextPage) {
      fetchNextPage();
    }
  };

  // Custom hooks
  useScrollDetector({ handleNearBottom });

  return (
    <main className="flex min-h-screen flex-col items-center p-2 justify-center">
      {isLoading ? (
        <CircularProgress color="info" />
      ) : (
        <>
          <Grid container py={2}>
            {posts?.map((post) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                p={1}
                key={post.id}
                className="flex justify-center w-full"
              >
                <PostCard
                  post={post}
                  handleSeeMore={() => {
                    router.push(`posts/${post.id}`);
                  }}
                />
              </Grid>
            ))}
          </Grid>

          {isFetchingNextPage && (
            <Box
              sx={{
                marginTop: 2,
                marginBottom: 10,
              }}
            >
              <CircularProgress color="info" />
            </Box>
          )}
        </>
      )}
    </main>
  );
}
