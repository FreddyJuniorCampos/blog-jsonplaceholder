"use client";
import { useParams } from "next/navigation";

import { usePostQuery } from "@/hooks";
import { PostCard } from "@/components/Cards";

export default function Post() {
  // Router
  const { id: postId } = useParams();

  // Queries
  const { data: post } = usePostQuery(
    typeof postId === "string" ? Number(postId) : 0
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-2 gap-4">
      <h1 className="text-3xl">Post</h1>

      {post && <PostCard post={post} variant="FULL" />}
    </main>
  );
}
