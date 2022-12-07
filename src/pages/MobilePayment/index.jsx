import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const MobilePayment = () => {
  const { setHeader } = useOutletContext();

  useEffect(() => {
    setHeader({
      prevUrl: "/optionalProduct",
      nextUrl: "/confirmation",
    });
  }, []);

  return <div>MobilePayment</div>;
};
