import { LoginForm } from "@/components/shadcn/login-form";
import Nav2 from "@/components/ui/Nav2";
import useStoreData from "@/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const isLoggedIn = useStoreData((state) => state.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    const checkLogin = () => {
      if (isLoggedIn) {
        toast.warning("Already Logged in !");
        navigate("/chat");
      }
    };
    checkLogin();
  });

  return (
    <div>
      {isLoggedIn && <Nav2 />}

      <LoginForm className="bg-bg-primary text-white min-h-screen" />
    </div>
  );
};

export default Login;
