import { useRef, useEffect } from "react";

export const useOutsideClick = (callback: () => void) => {
  const ref: { [key: string]: any; current: any } = useRef(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current?.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};
