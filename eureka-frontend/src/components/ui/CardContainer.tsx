import SpotlightCard from "@/components/shadcn/SpotlightCard";
import { TbCopyOff } from "react-icons/tb";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { GrOptimize } from "react-icons/gr";
import { PiBracketsCurlyDuotone } from "react-icons/pi";
import { FaList } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";

const CardContainer = () => {
  return (
    <section className="bg-bg-primary">
      <h1 className="font2-heading text-center py-5">
        Code Smarter with Eureka
      </h1>
      <div
        className="text-bg-primary mx-10
      relative h-95 overflow-hidden card-container"
      >
        {/* 1 */}
        <SpotlightCard
          className="custom-spotlight-card card card1"
          spotlightColor="rgba(255, 215, 0, 0.9)"
        >
          <h2 className="text-2xl font1-epundu text-center ">
            Learn, Don't Copy
          </h2>
          <TbCopyOff className="text-bg-primary text-9xl " />
          <p className="">
            We guide you with hints and tasks so you can build the solution
            yourself. No more copy-pasting code you don't understand.
          </p>
        </SpotlightCard>
        {/* 2 */}
        <SpotlightCard
          className="custom-spotlight-card card card2"
          spotlightColor="rgba(255, 215, 0, 0.9)"
        >
          <h2 className="text-2xl font1-epundu text-center  ">
            Sharpen Your Mindset
          </h2>
          <IoExtensionPuzzleSharp className="text-bg-primary text-9xl " />
          <p>
            Our challenges are designed to help you develop the problem-solving
            skills that real-world programmers use every day.
          </p>
        </SpotlightCard>
        {/* 3 */}
        <SpotlightCard
          className="custom-spotlight-card card card3"
          spotlightColor="rgba(255, 215, 0, 0.9)"
        >
          <h2 className="text-2xl font1-epundu text-center  ">
            Optimize Like a Pro
          </h2>
          <GrOptimize className="text-bg-primary text-9xl " />
          <p>
            Submit your code and our Gemini-powered engine will help you improve
            it, explaining the time and space complexity in detail.
          </p>
        </SpotlightCard>
        {/* 4 */}
        <SpotlightCard
          className="custom-spotlight-card card card4"
          spotlightColor="rgba(255, 215, 0, 0.9)"
        >
          <h2 className="text-2xl font1-epundu text-center  ">
            Your Personal Coding Mentor
          </h2>
          <PiBracketsCurlyDuotone className="text-bg-primary text-9xl " />
          <p>
            We act as your one-on-one mentor, providing personalized feedback
            tailored to your code and your learning needs.
          </p>
        </SpotlightCard>
        {/* 5 */}
        <SpotlightCard
          className="custom-spotlight-card card card5"
          spotlightColor="rgba(255, 215, 0, 0.9)"
        >
          <h2 className="text-2xl font1-epundu text-center  ">
            Master Any Concept
          </h2>
          <FaList className="text-bg-primary text-9xl " />
          <p>
            From basic data structures to advanced algorithms, we help you
            master the fundamentals of programming.
          </p>
        </SpotlightCard>
        {/* 6 */}
        <SpotlightCard
          className="custom-spotlight-card card card6"
          spotlightColor="rgba(255, 215, 0, 0.9)"
        >
          <h2 className="text-2xl font1-epundu text-center  ">
            Powered by Cutting-Edge AI
          </h2>
          <GiArtificialIntelligence className="text-bg-primary text-9xl " />
          <p>
            Our platform uses the latest in AI to provide the most accurate,
            helpful, and personalized guidance possible.
          </p>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default CardContainer;
