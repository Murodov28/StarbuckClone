import { EventsCard } from "./EventsCard";

export const EventsList = ({ cards }) => {
  return (
    <div className="flex gap-10 justify-between [@media(max-width:1060px)]:flex-col [@media(max-width:1060px)]:gap-5  ">
      {cards?.map((card, index) => (
        <EventsCard
          key={index}
          img={import.meta.env.BASE_URL + card.img}
          title={card.title}
          width={card.width}
        />
      ))}
    </div>
  );
};
