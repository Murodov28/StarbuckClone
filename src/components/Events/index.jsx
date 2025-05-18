import { useEffect, useRef, useState } from "react";
import { EventsList } from "./List/EventsList";
import { Layouts1 } from "../layouts/Layouts1";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
const p =
  "Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market";
export const Events = () => {
  const [ArrayE1, setArrayE1] = useState(null);
  const [ArrayE2, setArrayE2] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const OpenRef = useRef(null);
  useEffect(() => {
    const getArrayE1 = async () => {
      const response1 = await fetch(
        "/src/components/Events/ArrrayE/ARRAYE1.json"
      );
      const response2 = await fetch(
        "/src/components/Events/ArrrayE/ARRAYE2.json"
      );
      const data1 = await response1.json();
      const data2 = await response2.json();
      setArrayE1((prev) => (prev = data1));
      setArrayE2((prev) => (prev = data2));
    };

    getArrayE1();
  }, []);
  useEffect(() => {
    if (window.innerWidth > 860) {
      OpenRef.current.style.display = "block";
    } else if (isOpen) {
      OpenRef.current.style.display = "block";
    } else if (!isOpen) {
      OpenRef.current.style.display = "none";
    }
  }, [isOpen]);
  return (
    <div className="flex flex-col gap-28 pb-28">
      <Layouts1 h2="Our " h22="New Events" l={p} isWithCard={true} />
      <div className="flex flex-col gap-10 [@media(max-width:1060px)]:gap-5">
        <EventsList cards={ArrayE1} />
        <div ref={OpenRef} className="[@media(max-width:1060px)]:hidden ">
          <EventsList cards={ArrayE2} />
        </div>
      </div>
      <button
        className={
          "button py-1 rounded-[40px] text-2xl font-semibold text-white cursor-pointer w-xl mx-auto [@media(max-width:760px)]:w-full " +
          (window.innerWidth > 860 ? " hidden" : "")
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Less" : "More"}
      </button>
    </div>
  );
};
