import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/shadcn/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/shadcn/field";
import { Input } from "@/components/shadcn/input";
import SignupImage from "/signup-page-side.webp";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useSignup } from "@/hooks/useSignup";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { signup, loading, error } = useSignup();
  // const [name , setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = email.split("@")[0].trim().toLowerCase();
    try {
      const res = await signup({name, email, password });
      console.log("Signed in:", res);
    } catch {
      // error handled in hook
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 py-5", className)} {...props}>
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
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                  }}
                />
              </Field>
              <Field className="font1-epundu tracking-wider">
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      id="confirm-password"
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button className="white-btn cursor-pointer" type="submit">
                  Create Account
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
              className="absolute inset-0 h-full w-full object-cover saturate-150 "
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
