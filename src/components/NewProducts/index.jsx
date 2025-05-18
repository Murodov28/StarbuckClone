import { Layouts1 } from "../layouts/Layouts1";
import { List } from "../Products/List";
import "swiper/css";

const l =
  "Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!  Starbucks coffee and don't forget about the discount!";
export const NewProducts = ({ Products, setProducts }) => {
  return (
    <div className="flex flex-col gap-28 pb-28">
      <Layouts1 isWithCard={true} h2="New Our" h22=" Products" l={l} />
      <List
        isBasketCard={false}
        Products={Products}
        setProducts={setProducts}
      />
    </div>
  );
};
