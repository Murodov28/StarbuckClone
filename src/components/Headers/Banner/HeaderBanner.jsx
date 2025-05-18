import { HeaderBanner3D } from "./HeaderBanner3D";
import { HeaderBannerCard } from "./HeaderBannerCard";
import { useTextParallax } from "../../../hooks/useTextParralax";
import { useNumberParallax } from "../../../hooks/useNumberParrallax";
import { useRef } from "react";
import { Layouts1 } from "../../layouts/Layouts1";
export const HeaderBanner = () => {
  const cardsRef = useRef(null);
  const l = useTextParallax(
    "Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!"
  );
  const n = useNumberParallax(9, 80, cardsRef);
  const n2 = useNumberParallax(10, 70, cardsRef);
  const n3 = useNumberParallax(27, 20, cardsRef);
  return (
    <div className="pb-28 w-full h-max flex justify-between gap-40 [@media(max-width:1400px)]:gap-20 [@media(max-width:960px)]:flex-col-reverse [@media(max-width:960px)]:gap-6 [@media(max-width:960px)]:items-center ">
      <Layouts1
        h2="New Cafe by"
        l={l}
        buttonText="Select a coffee "
        buttonText2="More"
        h22=" Starbucks"
        isReverse={true}
        isWithCard={true}
        cardsRef={cardsRef}
        n={n}
        n2={n2}
        n3={n3}
      />
      <div className="w-1/2 h-max bg-img-banner [@media(max-width:960px)]:w-full">
        <div className="-rotate-20 flex items-center justify-center w-full">
          <HeaderBanner3D />
        </div>
      </div>
    </div>
  );
};
