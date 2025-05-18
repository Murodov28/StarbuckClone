import { useEffect, useState } from "react";

export function useTextParallax(text1) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  useEffect(() => {
    if (i < text1.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + text1[i]);
        setI((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [text1, i]);
  return text;
}
