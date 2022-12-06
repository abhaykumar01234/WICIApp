import { useEffect } from "react";
import { useGlobalCtx } from "../context/GlobalProvider";

export const ProductSelection = () => {
  const { setHeader } = useGlobalCtx();

  useEffect(() => {
    setHeader({
      prevUrl: "/login",
      nextUrl: "/contactInfo",
    });
  }, []);

  return <div>ProductSelection</div>;
};
