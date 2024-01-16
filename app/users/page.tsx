"use client";
import { UserCard } from "@/components/Cards";
import { CircularProgress, Grid } from "@mui/material";

import { useUsersQuery } from "@/hooks";

export default function Users() {
  // Queries
  const { data: users, isLoading } = useUsersQuery();

  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-6">
      {isLoading ? (
        <CircularProgress
          color="info"
          style={{
            marginTop: 130,
          }}
        />
      ) : (
        <Grid container py={2}>
          {users?.map((user) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              p={1}
              key={user.id}
              className="flex justify-center w-full"
            >
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      )}
    </main>
  );
}
