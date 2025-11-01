import type { ContentType } from "./HowItWorks";

const ContentCard = ({
  icon,
  text,
  index,
}: ContentType & { index: number }) => {
  return (
    <div
      className={`content-card py-5 px-5
  flex  items-center rounded-full w-full md:w-3/5 justify-start
    ${index % 2 === 0 ? "flex-row-reverse ml-auto " : "mr-auto "} 
     flex justify-center items-center gap-2
    shadow-sm shadow-text-secondary/50 `}
    >
      {icon}
      <p className="md:text-xl text-sm text-text-primary tracking-wider">{text}</p>
    </div>
  );
};

export default ContentCard;
