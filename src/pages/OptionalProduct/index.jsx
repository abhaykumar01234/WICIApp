import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const OptionalProduct = () => {
  const { setHeader } = useOutletContext();

  useEffect(() => {
    setHeader({
      prevUrl: "/supplementaryCard",
      nextUrl: "/mobilePayment",
    });
  }, []);

  return <div>OptionalProduct</div>;
};
