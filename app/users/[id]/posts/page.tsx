"use client";
import { PostCard } from "@/components/Cards";
import { PostCardSkeleton } from "@/components/Skeletons";
import { usePostByUserQuery } from "@/hooks";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";

export default function PostsByUser() {
  // Router
  const { id: userId } = useParams();

  // Queries
  const { data: posts, isLoading } = usePostByUserQuery(
    typeof userId === "string" ? Number(userId) : 0
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <div className="flex flex-col items-center gap-6 w-full">
        {isLoading ? (
          <div className="max-w-[700px] w-full">
            <PostCardSkeleton />
          </div>
        ) : (
          posts?.map((post) => (
            <PostCard key={post.id} post={post} variant="FULL" />
          ))
        )}
      </div>
    </main>
  );
}
