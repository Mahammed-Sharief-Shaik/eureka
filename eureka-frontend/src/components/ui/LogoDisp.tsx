import { useNavigate } from "react-router-dom";

const LogoDisp = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-center text-text-primary cursor-pointer items-center gap-2"
      onClick={() => {
        navigate("/");
      }}
    >
      <img src="./logo.webp" alt="Eureka" className="max-h-8" />
      <h1 className="font-logo tracking-wider">Eureka!</h1>
    </div>
  );
};

export default LogoDisp;
