import { LoginForm } from "@/components/shadcn/login-form";
import Nav2 from "@/components/ui/Nav2";
import useStoreData from "@/store/store";

const Login = () => {
  const isLoggedIn = useStoreData((state) => state.isLoggedIn);

  return (
    <div className="min-h-screen">
      {isLoggedIn && <Nav2 />}

      <LoginForm className="bg-bg-primary text-white min-h-screen" />
    </div>
  );
};

export default Login;
