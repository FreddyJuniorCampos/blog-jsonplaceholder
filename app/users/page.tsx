"use client";
import { useUsersQuery } from "@/hooks";

export default function Users() {
  // Queries
  const { data: users } = useUsersQuery();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl">Users</h1>

      <ol className="my-4">
        {users?.map((item) => (
          <li key={item.id} className="py-1">
            {item.id}: {item.name}
          </li>
        ))}
      </ol>
    </main>
  );
}
