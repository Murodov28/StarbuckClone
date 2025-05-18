import { PlayIcon } from "@heroicons/react/24/solid";
import { HeaderBannerCard } from "../Headers/Banner/HeaderBannerCard";
import { H2 } from "../ui/H2";
import { PText } from "../ui/P";
export const Layouts1 = ({
  h2,
  l,
  buttonText,
  buttonText2,
  h22,
  isReverse,
  cardsRef,
  n,
  n2,
  n3,
  isWithCard,
}) => {
  return (
    <div
      className={
        "flex flex-col gap-12 justify-center [@media(max-width:960px)]:w-full" +
        (isWithCard ? " w-1/2" : " w-full")
      }
    >
      <H2 h2={h2} h22={h22} />
      <PText l={l} />
      {isReverse ? (
        <div className="w-full flex gap-4">
          <button className="button w-3/4 py-5 rounded-3xl text-2xl font-semibold text-white cursor-pointer [@media(max-width:1400px)]:text-xl [@media(max-width:1400px)]:py-3  [@media(max-width:830px)]:text-[1rem] [@media(max-width:830px)]:py-2">
            {buttonText}
          </button>
          <button className="w-1/4 py-5 rounded-3xl text-2xl font-semibold text-white cursor-pointer border border-white [@media(max-width:1400px)]:p-3 [@media(max-width:1400px)]:text-xl [@media(max-width:830px)]:p-1.5 [@media(max-width:830px)]:text-[1rem]">
            {buttonText2}
          </button>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
      {isReverse ? (
        <div ref={cardsRef} className="flex gap-4 items-center justify-between">
          <HeaderBannerCard number={n} spanText="k+" pText="Premium Users" />
          <HeaderBannerCard number={n2} spanText="k+" pText="Happy Customer" />
          <HeaderBannerCard number={n3} spanText="+" pText="Awards Winning" />
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};
