import { PlayIcon } from "@heroicons/react/24/solid";
import { useTextParallax } from "../../hooks/useTextParralax";
import { Layouts1 } from "../layouts/Layouts1";
export const MakeSection = ({ img, title, title2, isVideo, isReverse }) => {
  const l = useTextParallax(
    "Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market"
  );
  return (
    <div
      className={
        "flex justify-between items-center gap-10 [@media(max-width:960px)]:flex-col pb-28 " +
        (isReverse ? " flex-row-reverse" : "")
      }
    >
      <div className="max-w-lg [@media(max-width:1400px)]:w-md [@media(max-width:1100px)]:w-sm [@media(max-width:960px)]:w-full">
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="w-md flex flex-col gap-16 [@media(max-width:1400px)]:gap-12 [@media(max-width:1100px)]:w-sm [@media(max-width:960px)]:w-full">
        <Layouts1
          h2={title}
          h22={title2}
          l={l}
          isReverse={false}
          isWithCard={false}
        />
        {isVideo && (
          <div className="relative w-full mx-auto max-w-full [@media(max-width:1400px)]:max-w-[400px] h-64 rounded-xl overflow-hidden shadow-lg [@media(max-width:960px)]:max-w-full">
            <div className="absolute inset-0 bg-black/50"></div>
            <button className="absolute inset-0 m-auto w-fit h-fit flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer">
              <PlayIcon className="w-5 h-5 text-white" />
              <span className="font-semibold">Cooking Process</span>
            </button>
          </div>
        )}
        {!isVideo && (
          <>
            <h4 className="text-white text-3xl [@media(max-width:1400px)]:text-2xl">
              @supercoffee
            </h4>
            <h4 className="text-white text-3xl [@media(max-width:1400px)]:text-2xl">
              +7-999-999-99-99
            </h4>
          </>
        )}
      </div>
    </div>
  );
};
//komponentlani boshqatdan korib ishlab chiqish kerak
