import { Navigate, Outlet } from "react-router-dom";
import { isTokenExpired } from "@/utils/auth";
import useStoreData from "@/store/store";
import { toast } from "sonner";

const ProtectedRoute = () => {
  const logoutUser = useStoreData((state) => state.logoutUser);
  const setIsLoggedIn = useStoreData((state) => state.setIsLoggedIn);
  if (isTokenExpired()) {
    logoutUser();
    toast.warning("Session Expired!");
    return <Navigate to="/" replace />;
  } else {
    setIsLoggedIn(true);
  }

  return <Outlet />;
};

export default ProtectedRoute;
