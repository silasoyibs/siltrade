import { useMutation } from "@tanstack/react-query";
import { signinWithGoggle as signinWithGoggleApi } from "../../services/apiAuth";
// import { useNavigate } from "react-router-dom";

export function useSigninWithGoggle() {
  // const navigate = useNavigate();
  const { mutate: signinWithGoggle, isLoading } = useMutation({
    mutationFn: signinWithGoggleApi,
    onSuccess: () => {
      // navigate("/dashboard");
    },
  });
  return { signinWithGoggle, isLoading };
}
