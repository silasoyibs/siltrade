import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signout as signoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

// mutation function to communicate to the server (post request to server to register new user)
export function useSignOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signout, isPending: isSigningOut } = useMutation({
    mutationFn: signoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });
  return { signout, isSigningOut };
}
