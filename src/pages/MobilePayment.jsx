import { useEffect } from "react";
import { useGlobalCtx } from "../context/GlobalProvider";

export const MobilePayment = () => {
  const { setHeader } = useGlobalCtx();

  useEffect(() => {
    setHeader({
      prevUrl: "/optionalProduct",
      nextUrl: "/confirmation",
    });
  }, []);

  return <div>MobilePayment</div>;
};
