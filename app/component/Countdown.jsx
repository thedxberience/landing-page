"use client";
import React, { useState, useEffect } from "react";

function Countdown() {
  const [countdown, setCountdown] = useState(14 * 24 * 60 * 60);

  function getTimeDifferenceInSeconds() {
    const today = new Date();
    const futureDate = new Date(
      "Mon Apr 01 2024 22:21:07 GMT+0400 (Gulf Standard Time)"
    ); // 14 days in milliseconds

    // console.log(futureDate, today, futureDate - today);

    const timeDifferenceInSeconds = Math.floor((futureDate - today) / 1000);

    setCountdown(timeDifferenceInSeconds);
    return timeDifferenceInSeconds;
  }

  useEffect(() => {
    getTimeDifferenceInSeconds();
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(countdown / (60 * 60 * 24));
  const hours = Math.floor((countdown % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((countdown % (60 * 60)) / 60);
  const seconds = countdown % 60;

  return (
    <div>
      <h1 className="text-lg">
        {days} days {hours} hours {minutes} minutes {seconds} seconds
      </h1>
    </div>
  );
}

export default Countdown;
