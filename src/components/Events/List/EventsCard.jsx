export const EventsCard = ({ img, title, width }) => {
  return (
    <div
      className={
        "relative rounded-4xl overflow-hidden [@media(max-width:1060px)]:w-full" +
        width
      }
    >
      <img
        className="blur-[2.5px] [@media(max-width:860px)]:h-52 object-top h-64 rounded-4xl w-full "
        src={img}
        alt=""
      />
      <div className=" absolute top-11 left-7 flex flex-col gap-11 items-start text-white">
        <h4 className="text-3xl font-medium two-lines [@media(max-width:1200px)]:text-xl">
          {title}
        </h4>
        <button className="button py-5 px-12 rounded-[40px] text-2xl font-semibold text-white cursor-pointer [@media(max-width:1200px)]:text-xl [@media(max-width:1200px)]:py-2.5 [@media(max-width:1200px)]:px-8">
          More
        </button>
      </div>
    </div>
  );
};
