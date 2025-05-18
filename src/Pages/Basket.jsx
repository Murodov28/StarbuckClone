import { useEffect, useState } from "react";
import { Navbar } from "../components/Headers/Navbar/Navbar";
import { List } from "../components/Products/List";
import { useList } from "../context/ListContext";
import "swiper/css";
export const Basket = () => {
  const { OrderProducts, totalPrice, totalOrders, setOrdersToBack } = useList();

  return (
    <div className="bg-[#121517] px-32 pt-12 min-h-screen min-w-full [@media(max-width:1400px)]:px-20  [@media(max-width:680px)]:px-10">
      <Navbar />
      {OrderProducts.length > 0 && (
        <div className="w-full flex flex-col gap-10">
          <List isBasketCard={true} Products={OrderProducts} />
          <div className="text-white flex flex-col gap-2 w-fit">
            <h3 className="text-3xl font-medium [@media(max-width:1400px)]:text-2xl [@media(max-width:680px)]:text-[1.2rem]">
              Your basket
            </h3>
            <p className="text-2xl [@media(max-width:1400px)]:text-xl [@media(max-width:680px)]:text-[1rem] ">
              You have {totalOrders} orders
            </p>
            <p className="text-2xl [@media(max-width:1400px)]:text-xl [@media(max-width:680px)]:text-[1rem] ">
              Total: {totalPrice.toFixed(2)}$
            </p>
            <button
              className="cursor-pointer py-1 w-full bg-banner-list-card rounded-full font-semibold "
              onClick={() => setOrdersToBack()}
            >
              Order
            </button>
          </div>
        </div>
      )}
      {OrderProducts.length === 0 && (
        <div className="flex flex-col gap-2 items-center w-full">
          <img
            className="w-40 h-50 [@media(max-width:680px)]:w-24 [@media(max-width:680px)]:h-28"
            src={`${import.meta.env.BASE_URL}basket.png`}
            alt=""
          />
          <h3 className="text-white text-3xl font-medium [@media(max-width:1400px)]:text-2xl [@media(max-width:680px)]:text-[1.5rem]">
            Basket is empty
          </h3>
          <p className="text-center text-[#D9D9D9] text-xl [@media(max-width:1400px)]:text-[1rem]">
            Add at least one product to your basket
          </p>
        </div>
      )}
    </div>
  );
};
