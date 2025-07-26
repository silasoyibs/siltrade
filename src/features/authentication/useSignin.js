import { useMutation } from "@tanstack/react-query";
import { signin as signinApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// mutation function to communicate to the server (post request to server to register new user)
export function useSignin() {
  const navigate = useNavigate();
  const { mutate: signin, isPending } = useMutation({
    mutationFn: signinApi,
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { signin, isPending };
}
