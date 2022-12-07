import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const ProductSelection = () => {
  const { setHeader } = useOutletContext();

  useEffect(() => {
    setHeader({
      prevUrl: "/",
      nextUrl: "/contactInfo",
    });
  }, []);

  return <div>ProductSelection</div>;
};
