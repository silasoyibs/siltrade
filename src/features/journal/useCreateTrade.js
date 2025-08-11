import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewTrade as createNewTradeAPI } from "../../services/apiTrades";
import toast from "react-hot-toast";

export function useCreateTrade() {
  const queryClient = useQueryClient();
  const { mutate: createNewTrade, isPending: isCreating } = useMutation({
    mutationFn: createNewTradeAPI,
    onSuccess: () => {
      toast.success("Trade sucessfully created");
      queryClient.invalidateQueries({ queryKey: ["trades"] });
    },
    onError: (err) => toast.error(err),
  });
  return { createNewTrade, isCreating };
}
