export const H2 = ({ h2, h22 }) => {
  return (
    <h2 className="text-7xl font-[800] text-white [@media(max-width:1400px)]:text-5xl">
      {h2}
      <span className=" text-h1">{h22}</span>
    </h2>
  );
};
