import { useQuery } from "@tanstack/react-query";
import { getWeeklyWinRate } from "../../services/apiTrades";

// weekly chart winrate
export function useWeeklyWinRate() {
  const { data: weeklyWinrate, isPending } = useQuery({
    queryKey: ["chartWeeklyWinrate"],
    queryFn: getWeeklyWinRate,
  });
  return { weeklyWinrate, isPending };
}

// export function useTrades() {
//   const { data: trades, isPending } = useQuery({
//     queryKey: ["trades"],
//     queryFn: getTrades,
//   });
//   return {
//     trades,
//     isPending,
//   };
// }
