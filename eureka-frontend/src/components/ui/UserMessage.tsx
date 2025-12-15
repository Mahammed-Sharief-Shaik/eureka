import MarkdownRenderer from "./MarkdownRenderer";

const UserMessage = ({ msg }: { msg: string }) => {
  return (
    <div
      className="bg-primary/20 w-9/10 lg:w-3/5 ml-auto my-1 text-justify text-base
        font1-epundu tracking-widest
    p-3 rounded-md"
    >
      <MarkdownRenderer content={`${msg}`}/>
      {/* <p></p> */}
      {/* {msg} */}
    </div>
  );
};

export default UserMessage;
