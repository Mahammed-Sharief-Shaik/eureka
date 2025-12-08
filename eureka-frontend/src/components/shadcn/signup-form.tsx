import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/shadcn/card";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/shadcn/field";
import { Input } from "@/components/shadcn/input";
import SignupImage from "/signup-page-side.webp";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useSignup } from "@/hooks/useSignup";
import ErrorDisplay from "../custom/ErrorDisplay";
import Loader from "../custom/Loader";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const isValid = (password: string): boolean => {
  const strongPasswordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/;
  return strongPasswordPattern.test(password);
};

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { signup, loading, setLoading, error, setError } = useSignup();

  // ⬇️ REPLACED useState with useRef
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("use effect ",error);
    if (error) {
      toast.error(error, {
        className: "font1-epundu tracking-wider",
      });

      setTimeout(() => {
        setError("");
      },1000);
    }
  }, [error]);
  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    const confirmPassword = confirmPasswordRef.current?.value ?? "";

    const name = email.split("@")[0].trim().toLowerCase();

    if (confirmPassword !== password) {
      setError("Passwords do not match.");
    } else if (password.length <= 8) {
      setLoading(false);
      setError("Password must be atleast 8 characters long.");
    } else if (!isValid(password)) {
      setLoading(false);
      setError(
        "Password must be a mix of uppercase, lowercase, numbers, and symbols."
      );
    } else {
      try {
        const res = await signup({ name, email, password });
        console.log("Signed in:", res);
        toast.success("Account created successfully. Proceed to login.", {
          className: "font1-epundu tracking-wider",
        });
        navigate("/login");
      } catch {
        // error handled in hook
      }
    }
    setLoading(false);
  };

  return (
    <div className={cn("flex flex-col gap-6 py-5", className)} {...props}>
      {loading && <Loader />}
      <Card className="overflow-hidden p-0 w-9/10 md:w-3/4 mx-auto ring-1 ring-white shadow-lg shadow-accent">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSignup}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold font2-sour-gummy">
                  Create your account
                </h1>
                <p className="text-muted-foreground text-sm text-balance font2-sour-gummy">
                  Enter your email below to create your account
                </p>
              </div>
              <Field className="font1-epundu tracking-wider">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="eureka@matrix.com"
                  required
                  ref={emailRef}
                  autoComplete="email"
                />
              </Field>
              <Field className="font1-epundu tracking-wider">
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      ref={passwordRef}
                      autoComplete="new-password"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      id="confirm-password"
                      type={showPassword ? "text" : "password"}
                      required
                      ref={confirmPasswordRef}
                      autoComplete="new-password"
                    />
                  </Field>
                </Field>
                <FieldDescription
                  className="flex  items-center gap-1 text-sm text-text-secondary "
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <FiEyeOff className="cursor-pointer" />
                  ) : (
                    <FiEye className="cursor-pointer" />
                  )}{" "}
                  <span className="cursor-pointer">
                    {showPassword ? "hide" : "show"} password
                  </span>
                </FieldDescription>
                {/* <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription> */}
                {/* {error && <ErrorDisplay message={error} />} */}
              </Field>
              <Field>
                <Button
                  className={` white-btn  ${
                    loading ? "grayscale cursor-not-allowed" : "cursor-pointer"
                  }`}
                  type="submit"
                >
                  {loading ? "Creating Account.." : "Create Account"}
                </Button>
              </Field>

              <FieldDescription className="text-center font1-epundu tracking-wider">
                Already have an account? <a href="/login">Sign in</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src={SignupImage}
              alt="Image"
              className={`absolute inset-0 h-full w-full object-cover saturate-150 ${
                loading && "grayscale"
              } `}
            />
          </div>
          {/* 
              while loading filter : grayscale
          */}
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center font1-epundu tracking-wider">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
