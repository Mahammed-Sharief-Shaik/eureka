import { Fa1, Fa2, Fa3, Fa4, Fa42Group, Fa5, FaCircle } from "react-icons/fa6";
import DisplayVideo from "/v2.mp4";

const HowItWorks = () => {
  return (
    <section className="py-5 bg-bg-primary">
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

      <div className="flex flex-col w-9/10 mx-auto gap-5 my-10 font1-epundu">
        <div className="content-card ">
          <Fa1 />
          <p>Pick a Challenge — test your problem-solving muscles.</p>
        </div>
        <div className="content-card">
          <Fa2 />
          <p>Stuck midway? Just say “Eureka!” and get guided, not spoiled.</p>
        </div>
        <div className="content-card">
          <Fa3 />
          <p>Chat with your AI mentor — unlock logic, not leaked code.</p>
        </div>
        <div className="content-card">
          <Fa4 />
          <p>Build it. Debug it. Own it. No copy-paste shortcuts.</p>
        </div>
        <div className="content-card">
          <Fa5 />
          <p>Grow your coder intuition — one hint at a time.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
