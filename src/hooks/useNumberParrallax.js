import { useEffect, useRef, useState } from "react";

export function useNumberParallax(num, delay, cardsRef) {
  const [number, setNumber] = useState(0);
  const [i, setI] = useState(0);
  useEffect(() => {
    console.log(window.scrollY);

    if (cardsRef.current) {
      if (
        window.scrollY >=
        cardsRef.current.offsetTop - cardsRef.current.offsetHeight * 10
      ) {
        if (i < num) {
          const timeout = setTimeout(() => {
            setNumber((prev) => prev + 1);
            setI((prev) => prev + 1);
          }, delay);
          return () => clearTimeout(timeout);
        }
      }
    }
  }, [num, delay, i, cardsRef]);
  // }, [num, delay, i, cardsRef, window.scrollY]);
  return number;
}
