import { useEffect } from "react";
import { useGlobalCtx } from "../context/GlobalProvider";

export const FinancialInfo = () => {
  const { setHeader } = useGlobalCtx();

  useEffect(() => {
    setHeader({
      prevUrl: "/contactInfo",
      nextUrl: "/supplementaryCard",
    });
  }, []);

  return <div>FinancialInfo</div>;
};
