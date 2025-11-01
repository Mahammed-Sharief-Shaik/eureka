import { Fa1, Fa2, Fa3, Fa4, Fa5 } from "react-icons/fa6";
import DisplayVideo from "/v2.mp4";
import ContentCard from "./ContentCard";

export type ContentType = {
  icon: React.ReactNode;
  text: string;
};

const HowItWorks = () => {
  const content: ContentType[] = [
    {
      icon: <Fa1 className="text-5xl text-accent" />,
      text: "Pick a Question — test your problem-solving muscles.",
    },
    {
      icon: <Fa2 className="text-5xl text-accent" />,
      text: "Stuck midway? Just say “Eureka!” and get guided, not spoiled.",
    },
    {
      icon: <Fa3 className="text-5xl text-accent" />,
      text: "Chat with your AI mentor — unlock logic, not leaked code.",
    },
    {
      icon: <Fa4 className="text-5xl text-accent" />,
      text: "Build it. Debug it. Own it. No copy-paste shortcuts.",
    },
    {
      icon: <Fa5 className="text-5xl text-accent" />,
      text: "Grow your coder intuition — one hint at a time.",
    },
  ];
  return (
    <section className="py-5 bg-bg-primary" id="how-it-works">
      <h1 className="font2-heading  text-center ">How it Works ?</h1>

      <div className="w-3/4 mx-auto my-5  ring-1 ring-white shadow-lg shadow-accent rounded-lg  ">
        <video
          src={DisplayVideo}
          className="rounded-lg"
          loop={true}
          controls={false}
          //   autoPlay={true}
          muted={true}
        ></video>
      </div>

      <div className="flex flex-col w-9/10 mx-auto gap-3 my-10 font1-epundu">
        {content.map(({ icon, text }, index) => {
          return (
            <ContentCard key={index} icon={icon} index={index} text={text} />
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
