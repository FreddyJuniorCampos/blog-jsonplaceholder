import { useQuery } from "@tanstack/react-query";

import { getUsers } from "@/lib/users";

export const useUsersQuery = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { ...query };
};
