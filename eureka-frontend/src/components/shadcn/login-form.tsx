import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/shadcn/card";
import LoginImage from "/login-side.webp";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/shadcn/field";
import { Input } from "@/components/shadcn/input";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useLogin } from "@/hooks/useLogin";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, loading, error } = useLogin();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      console.log("Logged in:", res);
    } catch {
      // error handled in hook
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 py-10", className)} {...props}>
      <Card className="overflow-hidden p-0 w-9/10 md:w-3/4 mx-auto ring-1 ring-white shadow-lg shadow-accent">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleLogin}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold font2-sour-gummy">
                  Welcome back
                </h1>
                <p className="text-muted-foreground text-balance font2-sour-gummy">
                  Login to your <span className="font-logo">Eureka</span>{" "}
                  account
                </p>
              </div>
              <Field className="font1-epundu tracking-wider">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="eureka@matrix.com"
                  value={email}
                  required
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                    console.log("Email : ", email);
                  }}
                />
              </Field>
              <Field className="font1-epundu tracking-wider">
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value);
                    console.log("Password : ", password);
                  }}
                />
              </Field>
              <Field>
                <Button className="lavendar-btn cursor-pointer" type="submit">
                  Login
                </Button>
              </Field>

              <FieldDescription className="text-center font1-epundu tracking-wider">
                Don&apos;t have an account? <a href="/signup">Sign up</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src={LoginImage}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover saturate-150  "
            />
            {/* 
              Filter wrong details : filter hue-rotate-180 brightness-90 saturate-300
            */}
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center font1-epundu tracking-wider">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
