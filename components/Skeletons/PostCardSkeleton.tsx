import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const PostCardSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton
        sx={{
          bgcolor: "primary.contrastText",
        }}
        variant="circular"
        width={40}
        height={40}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={60}
        sx={{
          bgcolor: "primary.contrastText",
        }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={60}
        sx={{
          bgcolor: "primary.contrastText",
        }}
      />
    </Stack>
  );
};
