import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const ApplicantInfo = () => {
  const { setHeader } = useOutletContext();

  useEffect(() => {
    setHeader({
      prevUrl: "/contactInfo",
      nextUrl: "/financialInfo",
    });
  }, []);

  return <div>ApplicantInfo</div>;
};
