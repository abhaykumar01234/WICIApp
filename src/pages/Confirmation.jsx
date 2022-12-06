import { useEffect } from "react";
import { useGlobalCtx } from "../context/GlobalProvider";

export const Confirmation = () => {
  const { setHeader } = useGlobalCtx();

  useEffect(() => {
    setHeader({
      prevUrl: "/mobilePayment",
      nextUrl: null,
    });
  }, []);

  return <div>Confirmation</div>;
};
