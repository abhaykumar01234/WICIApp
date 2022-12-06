import { useEffect } from "react";
import { useGlobalCtx } from "../context/GlobalProvider";

export const ContactInfo = () => {
  const { setHeader } = useGlobalCtx();

  useEffect(() => {
    setHeader({
      prevUrl: "/productSelection",
      nextUrl: "/financialInfo",
    });
  }, []);

  return <div>ContactInfo</div>;
};
