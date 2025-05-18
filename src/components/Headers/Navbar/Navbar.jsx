import { useState } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pb-10 [@media(max-width:850px)]:pb-10 [@media(max-width:680px)]:pb-5]">
      <nav className=" flex gap-24 items-center [@media(max-width:850px)]:gap-12 [@media(max-width:680px)]:justify-between ">
        <h1 className="font-[800] text-4xl text-h1 [@media(max-width:850px)]:text-3xl">
          StarBucks
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer [@media(min-width:680px)]:hidden flex flex-col space-y-1.5 "
        >
          <span
            className={"w-11 h-1 rounded-2xl burger" + (isOpen ? "hidden" : "")}
          ></span>
          <span
            className={
              "w-11 h-1 rounded-2xl burger " + (isOpen ? " rotate-45" : "")
            }
          ></span>
          <span
            className={
              "w-11 h-1 rounded-2xl burger " +
              (isOpen ? " -rotate-45 -translate-y-2.5" : "")
            }
          ></span>
        </button>
        <div className=" [@media(max-width:680px)]:hidden">
          <ul className="flex gap-20 [@media(max-width:850px)]:gap-10">
            <li className="text-[1.2rem] text-[#D9D9D9]">
              <Link to="/StarbuckClone/">Home</Link>
            </li>
            <li className="text-[1.2rem] text-[#D9D9D9]">Select</li>
            <li className="text-[1.2rem] text-[#D9D9D9]">
              <Link to="/StarbuckClone/Basket">Basket</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div id="mobile-menu" className={isOpen ? "block" : "hidden"}>
        <ul className=" h-screen [@media(max-width:450px)]:w-2/3 w-1/2 flex flex-col items-center bg-gradient-to-b from-green-800 to-green-700 gap-10 absolute top-0 left-0 p-10 z-50">
          <li className="text-[1.2rem] text-[#D9D9D9]">
            <Link to="/StarbuckClone/">Home</Link>
          </li>
          <li className="text-[1.2rem] text-[#D9D9D9]">Select</li>
          <li className="text-[1.2rem] text-[#D9D9D9]">
            <Link to="/StarbuckClone/Basket">Basket</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
