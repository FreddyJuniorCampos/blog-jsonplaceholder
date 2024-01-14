"use client";
import { PostCard } from "@/components/Cards";
import { usePostByUserQuery } from "@/hooks";
import { useParams } from "next/navigation";

export default function PostsByUser() {
  // Router
  const { id: userId } = useParams();

  // Queries
  const { data: posts } = usePostByUserQuery(
    typeof userId === "string" ? Number(userId) : 0
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <div className="flex flex-col gap-6">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} variant="FULL" />
        ))}
      </div>
    </main>
  );
}
