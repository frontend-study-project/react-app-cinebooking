import { useQuery } from "@tanstack/react-query";
import { getTheaterList } from "../utils/http";

export const useTheaterListQuery = (region: string) => {
  return useQuery({
    queryKey: ["theater", "list", region],
    queryFn: () => getTheaterList(region),
  });
};
