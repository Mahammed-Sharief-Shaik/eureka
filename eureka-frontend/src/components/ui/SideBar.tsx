import { FaUser } from "react-icons/fa6";
import { CiChat2 } from "react-icons/ci";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { TbUserHexagon } from "react-icons/tb";
import { useState } from "react";
import { GiH2O } from "react-icons/gi";

const SideBar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <aside
      className={`bg-bg-secondary 
    h-screen flex flex-col 
    text-2xl  py-3
    ${open ? "w-1/4" : "w-12"} z-10 ml-auto transition-all duration-300
    justify-between items-center border-r-gray-600 border-r-[0.5px] fixed top-0`}
    >
      <div
        onClick={() => {
          setOpen(!open);
          //   console.log(open);
        }}
      >
        {!open ? (
          <GoSidebarCollapse className="text-accent hover:text-accent/80 cursor-pointer" />
        ) : (
          <GoSidebarExpand className="text-accent hover:text-accent/80 cursor-pointer" />
        )}
      </div>

        <div className={`text-white ${!open && "hidden"}`}>
            <h2 className="text-center text-accent">CHATS</h2>
            <li>Lorem ipsum dolor </li>
            <li>Lorem ipsum dolor </li>
            <li>Lorem ipsum dolor </li>
            <li>Lorem ipsum dolor </li>
            <li>Lorem ipsum dolor </li>
            <li>Lorem ipsum dolor </li>
            <li>Lorem ipsum dolor </li>
            <li>Lorem ipsum dolor </li>
            <li>Lorem ipsum dolor </li>
            <li>Lorem ipsum dolor </li>
        </div>

      {/* <CiChat2 /> */}
      <div className="flex justify-center items-center flex-col ">
        <TbUserHexagon className="text-primary text-3xl" />
        {open && (<h2 className="text-white font2-sour-gummy">Matrix</h2>)}
      </div>
    </aside>
  );
};

export default SideBar;
