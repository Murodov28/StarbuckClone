import { HeaderBanner } from "./Banner/HeaderBanner";
import { InformationList } from "./Information/InformationList";
import { Navbar } from "./Navbar/Navbar";
export const Headers = () => {
  return (
    <header className=" ">
      <Navbar />
      <HeaderBanner />
      <div className="flex justify-center pb-28">
        <InformationList />
      </div>
    </header>
  );
};
