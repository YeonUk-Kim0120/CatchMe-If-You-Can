import { useState } from "react";
import { Navigate } from "react-router-dom";
import BackgroundImage from "../Component/LoadingBackground";

function Loading() {
  const [time, setTime] = useState(false);
  const timer = setTimeout(() => {
    setTime(true);
  }, 2000);

  return <div>{time ? <Navigate to="/notlogin" /> : <BackgroundImage />}</div>;
}

export default Loading;
