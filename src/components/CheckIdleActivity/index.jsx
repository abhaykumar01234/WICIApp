import React from "react";
import { useIdleActivity } from "../../utils/hooks/useIdleActivity";

const CheckIdleActivity = () => {
  const timeLeft = useIdleActivity();
  return (
    <div align="right">
      Session will logout in {Math.floor(timeLeft / 60)}:{timeLeft % 60}
    </div>
  );
};

export default CheckIdleActivity;
