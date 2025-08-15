import { useQuery } from "@tanstack/react-query";
import { getAiInsight } from "../../services/apiAiInsight";

export function useAiInsight(trades) {
  const { data: aiTradeInsight, isPending } = useQuery({
    queryKey: ["aiinsight", trades],
    queryFn: () => getAiInsight(trades),
    enabled: Array.isArray(trades) && trades.length > 0,
    staleTime: 1000 * 60 * 60 * 24,
    retry: 1, // reduce retries
  });

  return { aiTradeInsight, isPending };
}
