import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTrade as editTradeAPI } from "../../services/apiTrades";
import toast from "react-hot-toast";

export function useEditTrade() {
  const queryClient = useQueryClient();
  const { mutate: editTrade, isPending: isEditing } = useMutation({
    mutationFn: editTradeAPI,
    onSuccess: () => {
      toast.success("Trade edited sucessfully");
      queryClient.invalidateQueries({ queryKey: ["trades"] });
    },
    onError: (error) => toast.error(error.message),
  });
  return { editTrade, isEditing };
}
