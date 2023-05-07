import React, { useState, useEffect } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;
  const countDown = () => {
    const destination = new Date("July 16, 2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    countDown();
  });

  return (
    <div className="clock-wrapper d-flex align-items-center gap-2 gap-md-3">
      <div className="clock-date d-flex align-items-center gap-1 gap-md-3">
        <div className="text-center">
          <h1 className="text-white">{days}</h1>
          <h3 className="text-white">Days</h3>
        </div>
        <span className="text-white fs-3 text-center">:</span>
      </div>

      <div className="clock-hours d-flex align-items-center gap-2 gap-md-3">
        <div className="text-center">
          <h1 className="text-white">{hours}</h1>
          <h3 className="text-white">Hours</h3>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock-minutes d-flex align-items-center gap-2 gap-md-3">
        <div className="text-center">
          <h1 className="text-white">{minutes}</h1>
          <h3 className="text-white">Minutes</h3>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock-second d-flex align-items-center gap-2 gap-md-3">
        <div className="text-center">
          <h1 className="text-white">{seconds}</h1>
          <h3 className="text-white">Seconds</h3>
        </div>
      </div>
    </div>
  );
};

export default Clock;
