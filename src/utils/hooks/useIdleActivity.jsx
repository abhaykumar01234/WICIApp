import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TEN_MINUTES = 10 * 60 * 1000;
const whiteListedUrls = ["/", "/productSelection"];

export const useIdleActivity = () => {
  const navigate = useNavigate();
  const timerRef = useRef(null);
  const debounceRef = useRef(null);
  const intervalRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(TEN_MINUTES / 1000);

  const redirectToLogin = () => navigate("/");

  const detectActivity = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearTimeout(intervalRef.current);
    setTimeLeft(TEN_MINUTES / 1000);
    if (!whiteListedUrls.includes(window.location.pathname)) {
      timerRef.current = setTimeout(redirectToLogin, TEN_MINUTES);
      intervalRef.current = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    }
  };

  useEffect(() => {
    if (timeLeft === 0) clearTimeout(intervalRef.current);
    if (timeLeft === 3) navigate("/productSelection");
  }, [timeLeft]);

  const handleMouseMove = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(detectActivity, 500);
  };

  useEffect(() => {
    detectActivity();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleMouseMove);
    document.addEventListener("touchstart", detectActivity);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleMouseMove);
      document.removeEventListener("touchstart", detectActivity);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, []);

  return timeLeft;
};
