import { useQuery } from "@tanstack/react-query";
import { getRecentTrades } from "../../services/apiTrades";

export function useRecentTrades() {
  const { data: recentTrades, isPending } = useQuery({
    queryKey: ["recentTrades"],
    queryFn: getRecentTrades,
  });

  return { recentTrades, isPending };
}
