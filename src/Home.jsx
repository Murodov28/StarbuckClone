import { useEffect, useState } from "react";
import { Headers } from "./components/Headers";
import { MakeSection } from "./components/MakeSection";
import { NewProducts } from "./components/NewProducts";
import { Events } from "./components/Events";
import { useList } from "./context/ListContext";
export const Home = function () {
  const [isLoading, setIsLoading] = useState(true);
  const { Products, setProducts } = useList();
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://7b3d99c6c3f86e36.mokky.dev/items");
      const data = await response.json();
      setProducts(data);
    };
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    getProducts();
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading && (
        <div className=" bg-[#121517] min-h-screen flex justify-center items-center ">
          <div className="w-80 border-2 border-[#b9b9b9] p-0.5 rounded-full">
            <div className="loading h-2"></div>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="bg-[#121517] px-32 pt-12 min-h-screen min-w-full [@media(max-width:1400px)]:px-20  [@media(max-width:680px)]:px-10 ">
          <Headers />
          <MakeSection
            title={"We Make"}
            title2={" delicious"}
            isVideo={true}
            img={`${import.meta.env.BASE_URL}Group 97.png`}
            isReverse={false}
          />
          <NewProducts Products={Products} setProducts={setProducts} />
          <Events />
          <MakeSection
            title={"Our "}
            title2={" Contacts"}
            isVideo={false}
            img={`${import.meta.env.BASE_URL}Group 53.png`}
            isReverse={true}
          />
        </div>
      )}
    </>
  );
};
{
  /* <div className="flex items-center justify-center h-32">
            <div className="w-10 h-10 border-4 border-t-transparent border-green-500 rounded-full animate-spin"></div>
          </div> */
}
