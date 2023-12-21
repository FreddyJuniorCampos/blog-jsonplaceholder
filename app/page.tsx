"use client";
import { usePostsOptions } from "@/hooks/usePostsQuery";

export default function Home() {
  const { posts, fetchNextPage, hasNextPage } = usePostsOptions();

  const handleClick = () => {
    fetchNextPage();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">Blog JsonPlaceholder</h1>

      <ol className="my-4">
        {posts?.map((item) => (
          <li key={item.id} className="py-1">
            {item.id}: {item.title}
          </li>
        ))}
      </ol>

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
