import { Card } from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiperCustom.css";
import { useEffect } from "react";
import { useList } from "../../context/ListContext";
export const List = ({ Products, isBasketCard }) => {
  const { onClick, OrderProducts, plusCount, minusCount } = useList();
  useEffect(() => {
    console.log(OrderProducts);
  }, [OrderProducts]);
  const slidesToShow = Math.min(Products.length, 3);
  return (
    <div className="flex justify-between items-center gap-5">
      <Swiper
        key={Products.length}
        modules={[Navigation, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: Math.min(Products.length, 2),
          },
          1100: {
            slidesPerView: slidesToShow,
          },
        }}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {Products?.map((product, index) => (
          <SwiperSlide key={index}>
            <Card
              isBasketCard={isBasketCard}
              plusCount={() => plusCount(product.id)}
              minusCount={() => minusCount(product.id)}
              onClick={() => onClick(product.id)}
              id={product.id}
              img={product.img}
              h4={product.title}
              p={product.description}
              b={product.price}
              span={product.capacity}
              count={product.count}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
// window.innerWidth < 650 ? 1 : window.innerWidth < 1100 ? 2 : 3
