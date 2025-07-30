// import { useEffect } from "react";
// import { useCurrentUser } from "../features/authentication/useCurrentUser";
// import { useNavigate } from "react-router-dom";
// import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  return children;
  // const navigate = useNavigate();
  // const { isAuthenticated, isPending, user } = useCurrentUser();
  // console.log(isAuthenticated, isPending, user);
  // // user is not authenticated
  // useEffect(() => {
  //   if (!isAuthenticated && !isPending) navigate("/login");
  // }, [isAuthenticated, isPending, navigate]);
  // // authenticated user is loading
  // if (isPending) return <Spinner />;
  // // user is authenticated
  // if (isAuthenticated) return children;
}

export default ProtectedRoute;
