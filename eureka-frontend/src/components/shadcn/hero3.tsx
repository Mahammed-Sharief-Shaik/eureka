import { ArrowDownRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Hero3Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  reviews?: {
    count: number;
    avatars: {
      src: string;
      alt: string;
    }[];
    rating?: number;
  };
}

const Hero3 = ({
  heading = "Think Like a Coder, Not a Copy-Paster",
  description = "Step-by-step hints that sharpen your problem-solving mindset—without spoiling the answer.",
  buttons = {
    primary: {
      text: "Sign Up",
      url: "/signup",
    },
    secondary: {
      text: "Know More",
      url: "/about",
    },
  },
}: Hero3Props) => {
  return (
    <section className="w-full">
      <div className=" px-5 py-3 grid items-center   lg:grid-cols-2  bg-bg-primary">
        <div className=" flex flex-col items-center text-center 
        
          lg:items-start lg:text-left">
          <h1 className="font2-heading my-6">
            {heading}
          </h1>
          <p className="text-text-secondary mb-8  lg:text-xl font1-epundu">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start font1-epundu">
            {buttons.primary && (
              <Button asChild className="w-full sm:w-auto border lavendar-btn ">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
            {buttons.secondary && (
              <Button asChild variant="outline" className="white-btn">
                <a href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowDownRight className="size-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="flex">
          <img
            src="./full-logo.webp"
            alt="placeholder hero"
            className="max-h-[500px] w-full rounded-lg object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export { Hero3 };
