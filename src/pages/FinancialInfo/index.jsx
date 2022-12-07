import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const FinancialInfo = () => {
  const { setHeader } = useOutletContext();

  useEffect(() => {
    setHeader({
      prevUrl: "/contactInfo",
      nextUrl: "/supplementaryCard",
    });
  }, []);

  return <div>FinancialInfo</div>;
};
