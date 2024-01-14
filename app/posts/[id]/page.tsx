"use client";
import { useParams } from "next/navigation";

import { usePostQuery } from "@/hooks";
import { PostCard } from "@/components/Cards";
import { PostCardSkeleton } from "@/components/Skeletons";

export default function Post() {
  // Router
  const { id: postId } = useParams();

  // Queries
  const { data: post, isLoading } = usePostQuery(
    typeof postId === "string" ? Number(postId) : 0
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-2 gap-4">
      {isLoading ? (
        <div className="max-w-[700px] w-full">
          <PostCardSkeleton />
        </div>
      ) : (
        <>{post && <PostCard post={post} variant="FULL" />}</>
      )}
    </main>
  );
}
