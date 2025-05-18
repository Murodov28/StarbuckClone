import { createContext, useState, useContext, useEffect } from "react";
const ListContext = createContext();
export const ListProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [OrderProducts, setOrderProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalOrders, setOrders] = useState(0);

  const onClick = (id) => {
    console.log(id);
    const product = Products.find((product) => product.id === id);
    const order = OrderProducts.find((product) => product.id === id);
    if (order) {
      const newOrder = { ...order, count: order.count + 1 };
      setOrderProducts((prev) => prev.filter((product) => product.id !== id));
      setOrderProducts((prev) => [...prev, newOrder]);
    } else {
      setOrderProducts((prev) => [...prev, { ...product, count: 1 }]);
    }
  };
  const plusCount = (id) => {
    setOrderProducts((prev) =>
      prev.map((prd) =>
        prd.id === id ? { ...prd, count: prd.count + 1 } : prd
      )
    );
  };
  const minusCount = (id) => {
    const product = OrderProducts.find((product) => product.id === id);
    if (product.count > 1) {
      setOrderProducts((prev) =>
        prev.map((prd) =>
          prd.id === id ? { ...prd, count: prd.count - 1 } : prd
        )
      );
    } else {
      setOrderProducts((prev) => prev.filter((product) => product.id !== id));
    }
  };
  useEffect(() => {
    let sum = 0;
    let orders = 0;
    OrderProducts.forEach((product) => {
      sum += product.price * product.count;
      orders += product.count;
    });
    setTotalPrice(sum);
    setOrders(orders);
  }, [OrderProducts]);
  const setOrdersToBack = () => {
    const setOrdersToBack = async () => {
      await fetch("https://7b3d99c6c3f86e36.mokky.dev/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1,
          orders: OrderProducts,
          totalPrice: totalPrice,
          totalOrders: totalOrders,
        }),
      });
      setOrderProducts([]);
    };
    setOrdersToBack();
  };
  return (
    <ListContext.Provider
      value={{
        Products,
        setProducts,
        OrderProducts,
        setOrderProducts,
        onClick,
        plusCount,
        minusCount,
        totalPrice,
        totalOrders,
        setOrdersToBack,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => useContext(ListContext);
