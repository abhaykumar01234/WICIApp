import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const Confirmation = () => {
  const { setHeader } = useOutletContext();

  useEffect(() => {
    setHeader({
      prevUrl: "/mobilePayment",
      nextUrl: null,
    });
  }, []);

  return <div>Confirmation</div>;
};
