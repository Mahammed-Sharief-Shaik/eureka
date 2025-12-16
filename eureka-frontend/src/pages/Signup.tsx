import { SignupForm } from "@/components/shadcn/signup-form";
import Nav2 from "@/components/ui/Nav2";
import useStoreData from "@/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Signup = () => {
  const isLoggedIn = useStoreData((state) => state.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    const checkLogin = () => {
      if (isLoggedIn) {
        toast.warning("Already Logged in !", {
          className: "font1-epundu tracking-wider",
        });
        navigate("/chat");
      }
    };

    checkLogin();
  });
  return (
    <div>
      {isLoggedIn && <Nav2 />}
      <SignupForm className="bg-bg-primary text-white " />
    </div>
  );
};

export default Signup;
