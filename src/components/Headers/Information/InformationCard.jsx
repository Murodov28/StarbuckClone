export const InformationCard = ({ img, title, description }) => {
  return (
    <div className="flex flex-col gap-1.5 items-center w-1/3 [@media(max-width:850px)]:w-full">
      <div className=" w-36 h-36 bg-banner-list-card flex justify-end items-center rounded-full [@media(max-width:850px)]:w-28 [@media(max-width:850px)]:h-28">
        <img
          className="w-34 h-34 [@media(max-width:850px)]:w-26 [@media(max-width:850px)]:h-26"
          src={img}
          alt=""
        />
      </div>
      <h4 className="text-3xl font-medium text-center [@media(max-width:1400px)]:text-2xl">
        {title}
      </h4>
      <p className="text-[#121517E5] text-xl text-center [@media(max-width:1400px)]:text-[1rem]">
        {description}
      </p>
    </div>
  );
};
