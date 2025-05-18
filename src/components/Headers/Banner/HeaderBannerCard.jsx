export const HeaderBannerCard = ({ number, spanText, pText }) => {
  return (
    <div className="text-white">
      <span className="text-6xl [@media(max-width:1400px)]:text-4xl ">
        {number}
        {spanText}
      </span>
      <p className="text-xl text-[#D9D9D9] [@media(max-width:1400px)]:text-[1rem]">
        {pText}
      </p>
    </div>
  );
};
