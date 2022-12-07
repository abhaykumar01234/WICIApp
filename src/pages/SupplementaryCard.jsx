import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const SupplementaryCard = () => {
  const { setHeader } = useOutletContext();

  useEffect(() => {
    setHeader({
      prevUrl: "/financialInfo",
      nextUrl: "/optionalProduct",
    });
  }, []);

  return <div>SupplementaryCard</div>;
};
