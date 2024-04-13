import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setSeconds((prevSeconds) => prevSeconds + 1);
  };

  return (
    <div
      style={{
        border: "5px solid black",
        margin: "auto",
        width: "300px",
        height: "100px",
        justifyContent: "center",
        alignContent: "center",
        fontSize: "30px",
        fontWeight: "bolder",
      }}
    >
      Seconds: {seconds}
    </div>
  );
};

export default Timer;
