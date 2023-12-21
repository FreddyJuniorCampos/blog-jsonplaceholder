"use client";
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
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl">Posts by User</h1>

      <ol className="my-4">
        {posts?.map((item) => (
          <li key={item.id} className="py-1">
            {item.id}: {item.title}
          </li>
        ))}
      </ol>
    </main>
  );
}
