import { useQuery } from "@tanstack/react-query";
import { getPaginatedTrades, getTrades } from "../../services/apiTrades";

// Use this when you need pagination
export function usePaginatedTrades(page, limit, filters) {
  const { data, isPending } = useQuery({
    queryKey: ["trades", page, limit, filters],
    queryFn: () => getPaginatedTrades(page, limit, filters),
    keepPreviousData: true,
  });

  return {
    trades: data?.data ?? [],
    totalCount: data?.totalCount ?? 0,
    isPending,
  };
}

export function useTrades() {
  const { data: trades, isPending } = useQuery({
    queryKey: ["trades"],
    queryFn: getTrades,
  });
  return {
    trades,
    isPending,
  };
}
