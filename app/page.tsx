"use client";
import { useRouter } from "next/navigation";

import { Grid } from "@mui/material";

import { PostCard } from "@/components/Cards";
import { usePostsQuery } from "@/hooks";

export default function Home() {
  // Router
  const router = useRouter();

  // Queries
  const { posts, fetchNextPage, hasNextPage } = usePostsQuery();

  // Custom functions
  const handleClick = () => {
    fetchNextPage();
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-2 justify-center">
      <h1 className="text-3xl">Blog JsonPlaceholder</h1>

      <Grid container py={6}>
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
              handleLearnMore={() => {
                router.push(`posts/${post.id}`);
              }}
            />
          </Grid>
        ))}
      </Grid>

      <button
        className="bg-blue-500 px-4 py-2 rounded-sm hover:opacity-90 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-100"
        disabled={!hasNextPage}
        onClick={handleClick}
      >
        Click me
      </button>
    </main>
  );
}
