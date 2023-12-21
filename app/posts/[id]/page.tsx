"use client";
import { useParams } from "next/navigation";

import { usePostQuery } from "@/hooks";

export default function Post() {
  // Router
  const { id: postId } = useParams();

  // Queries
  const { data: post } = usePostQuery(
    typeof postId === "string" ? Number(postId) : 0
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl">Post</h1>

      <div className="flex flex-col gap-2 my-4">
        <h2>
          {post?.id}: {post?.title}
        </h2>

        <p>{post?.body}</p>
      </div>
    </main>
  );
}
