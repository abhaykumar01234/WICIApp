import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const ContactInfo = () => {
  const { setHeader } = useOutletContext();

  useEffect(() => {
    setHeader({
      prevUrl: "/productSelection",
      nextUrl: "/applicantInfo",
    });
  }, []);

  return <div>ContactInfo</div>;
};
