import { useMutation } from "@tanstack/react-query";
import { googleAuth as googleAuthApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useGoogleAuth() {
  const { mutate: googleAuth, isLoading } = useMutation({
    mutationFn: googleAuthApi,
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { googleAuth, isLoading };
}
