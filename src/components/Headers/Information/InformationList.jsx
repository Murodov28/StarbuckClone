import { InformationCard } from "./InformationCard";

export const InformationList = () => {
  return (
    <div className="relative px-20 py-10 flex gap-32 w-fit bg-banner-list rounded-3xl [@media(max-width:1400px)]:gap-20 [@media(max-width:1400px)]:px-14 [@media(max-width:1400px)]:py-5 [@media(max-width:850px)]:flex-col [@media(max-width:850px)]:px-10 [@media(max-width:960px)]:gap-10">
      <img
        className="absolute -top-24 -left-24 [@media(max-width:960px)]:hidden"
        src="/public/Group 25.png"
        alt=""
      />
      <InformationCard
        img="/public/21 1.png"
        title="Tasty"
        description="We have the most delicious coffee"
      />
      <InformationCard
        img="/public/30 1.png"
        title="Fast"
        description="Our cafe will serve you quickly"
      />
      <InformationCard
        img="/public/10 1.png"
        title="Available"
        description="Cafe will serveat the most pleasant prices"
      />
    </div>
  );
};
