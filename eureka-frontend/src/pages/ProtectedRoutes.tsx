import { Navigate, Outlet } from "react-router-dom";
import { isTokenExpired } from "@/utils/auth";
import useStoreData from "@/store/store";
import { toast } from "sonner";

const ProtectedRoute = () => {
  const logoutUser = useStoreData((state) => state.logoutUser);
  const setIsLoggedIn = useStoreData((state) => state.setIsLoggedIn);
  const isLoggedIn = useStoreData((state) => state.isLoggedIn);
  if (isTokenExpired()) {
    toast.warning("Session Expired!", {
      className: "font1-epundu tracking-wider",
    });
    logoutUser();
    return <Navigate to="/" replace />;
  } else if (!isLoggedIn) {
    toast.warning("Login Required", {
      className: "font1-epundu tracking-wider",
    });
    return <Navigate to="/login" replace />;
  } else {
    setIsLoggedIn(true);
  }

  return <Outlet />;
};

export default ProtectedRoute;
