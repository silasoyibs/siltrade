import { useQuery } from "@tanstack/react-query";
import { getPaginatedTrades, getTrades } from "../../services/apiTrades";

// Use this when you need pagination
export function usePaginatedTrades(page, limit) {
  const { data, isPending } = useQuery({
    queryKey: ["trades", page, limit],
    queryFn: () => getPaginatedTrades(page, limit),
    keepPreviousData: true,
  });
  return {
    trades: data?.data ?? [], // rows for this page
    totalCount: data?.totalCount ?? 0, // total rows in DB
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
