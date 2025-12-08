import { BlinkBlur } from "react-loading-indicators";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 bg-bg-primary h-full  w-screen z-10 opacity-40
    flex items-center justify-center cursor-progress
    ">
      <BlinkBlur speedPlus={0}  easing={"ease-out"} color={["#fbbf24", "#24fb53", "#2460fb", "#fb24cb"]} />;
    </div>
  );
};

export default Loader;
