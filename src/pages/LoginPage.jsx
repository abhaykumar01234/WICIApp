import { useEffect } from "react";
import { useGlobalCtx } from "../context/GlobalProvider";

export const LoginPage = () => {
  const { setHeader } = useGlobalCtx();

  useEffect(() => {
    setHeader({
      prevUrl: null,
      nextUrl: "/productSelection",
    });
  }, []);

  return <div>LoginPage</div>;
};
