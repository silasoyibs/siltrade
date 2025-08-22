import { useQuery } from "@tanstack/react-query";
import { getTrades } from "../../services/apiTrades";

export function useTrades(page, limit) {
  const { data, isPending } = useQuery({
    queryKey: ["trades", page, limit],
    queryFn: () => getTrades(page, limit),
  });
  return {
    trades: data?.data ?? [], // this is your "rows"
    totalCount: data?.totalCount ?? 0, // this is the count
    isPending,
  };
}
