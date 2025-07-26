import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

// mutation function to communicate to the server (post request to server to register new user)
export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account created successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { signup, isPending };
}
