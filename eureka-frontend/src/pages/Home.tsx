import { Hero3 } from "@/components/shadcn/hero3";
import CardContainer from "../components/ui/CardContainer";
import HowItWorks from "@/components/ui/HowItWorks";
import useStoreData from "@/store/store";
import Nav2 from "@/components/ui/Nav2";

const Home = () => {
  const isLoggedIn = useStoreData((state) => state.isLoggedIn);

  return (
    <div>
      {isLoggedIn && <Nav2 />}
      <Hero3 />
      <CardContainer />
      <HowItWorks />
    </div>
  );
};

export default Home;
