import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTrade as deleteTradeApi } from "../../services/apiTrades";
import toast from "react-hot-toast";

export function useDeleteTrade() {
  const queryClient = useQueryClient();
  const { mutate: deleteTrade, isPending: isDeleting } = useMutation({
    mutationFn: deleteTradeApi,
    onSuccess: () => {
      toast.success("Trade deleted sucessfully");
      queryClient.invalidateQueries(["Trades"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { deleteTrade, isDeleting };
}
