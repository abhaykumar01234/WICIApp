import { useEffect } from "react";
import { useGlobalCtx } from "../context/GlobalProvider";

export const SupplementaryCard = () => {
  const { setHeader } = useGlobalCtx();

  useEffect(() => {
    setHeader({
      prevUrl: "/financialInfo",
      nextUrl: "/optionalProduct",
    });
  }, []);

  return <div>SupplementaryCard</div>;
};
