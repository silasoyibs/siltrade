import { useQuery } from "@tanstack/react-query";
import { getTrades } from "../../services/apiTrades";

export function useTrades() {
  const { data: trades, isPending } = useQuery({
    queryKey: ["trades"],
    queryFn: getTrades,
  });

  return { trades, isPending };
}
