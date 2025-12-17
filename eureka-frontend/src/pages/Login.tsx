import { LoginForm } from "@/components/shadcn/login-form";
import Nav2 from "@/components/ui/Nav2";
import useStoreData from "@/store/store";

const Login = () => {
  const isLoggedIn = useStoreData((state) => state.isLoggedIn);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-full">
      {isLoggedIn && <Nav2 />}

      <LoginForm className="bg-bg-primary text-white min-h-screen pt-10 md:py-5" />
    </div>
  );
};

export default Login;
