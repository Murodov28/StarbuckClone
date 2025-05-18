export const Card = ({
  img,
  h4,
  p,
  b,
  span,
  id,
  count,
  onClick,
  isBasketCard,
  plusCount,
  minusCount,
}) => {
  return (
    <div className="text-white px-10 py-11  border-liner rounded-2xl flex flex-col gap-6 justify-center items-center w-fit [@media(max-width:900px)]:px-6 [@media(max-width:900px)]:py-7">
      <div className="relative [@media(max-width:900px)]:w-40 [@media(max-width:900px)]:h-40 w-44 h-44 bg-banner-list-card rounded-full">
        <img className="image-position" src={img} alt="" />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h4 className="font-medium text-3xl [@media(max-width:900px)]:text-2xl ">
          {h4}
        </h4>
        <p className="text-[#D9D9D9] text-xl text-center [@media(max-width:900px)]:text-[1rem] ">
          {p}
        </p>
      </div>
      <div className="flex justify-between w-full items-center">
        <b className="font-medium text-3xl [@media(max-width:900px)]:text-2xl ">
          {b}$
        </b>
        <span className="text-[#D9D9D9] text-xl [@media(max-width:900px)]:text-[1rem]">
          {span} ml
        </span>
      </div>
      {!isBasketCard && (
        <button
          onClick={() => onClick(id)}
          className="button w-full py-3 rounded-3xl text-2xl font-semibold text-white cursor-pointer [@media(max-width:900px)]:text-xl [@media(max-width:900px)]:py-1.5"
        >
          Add to cart
        </button>
      )}
      {isBasketCard && (
        <div className="w-full flex flex-col gap-2 items-center">
          <span className="">{count}</span>
          <div className="flex gap-4 w-full">
            <button
              className="cursor-pointer w-1/2 bg-banner-list-card rounded-full font-semibold"
              onClick={() => plusCount(id)}
            >
              +
            </button>
            <button
              className="cursor-pointer w-1/2 bg-banner-list-card-red rounded-full font-semibold"
              onClick={() => minusCount(id)}
            >
              -
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
