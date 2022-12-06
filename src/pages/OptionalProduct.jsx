import { useEffect } from "react";
import { useGlobalCtx } from "../context/GlobalProvider";

export const OptionalProduct = () => {
  const { setHeader } = useGlobalCtx();

  useEffect(() => {
    setHeader({
      prevUrl: "/supplementaryCard",
      nextUrl: "/mobilePayment",
    });
  }, []);

  return <div>OptionalProduct</div>;
};
