"use client"

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = (): void => {
      const difference = targetDate - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-1 md:gap-10">
      <div className="flex flex-col items-center">
        <div className="bg-white p-2 md:p-4 text-center w-12 md:w-24">
          <span className="text-blue-800 font-bold text-xl md:text-4xl">{String(timeLeft.days).padStart(2, '0')}</span>
        </div>
        <span className="text-white text-xs lg:text-xl mt-5">Days</span>
      </div>
      
      <div className="flex items-center justify-center text-white text-xl md:text-4xl font-bold mb-6">:</div>
      
      <div className="flex flex-col items-center">
        <div className="bg-white p-2 md:p-4 text-center w-12 md:w-24">
          <span className="text-blue-800 font-bold text-xl md:text-4xl">{String(timeLeft.hours).padStart(2, '0')}</span>
        </div>
        <span className="text-white text-xs lg:text-xl     mt-5">Hour</span>
      </div>
      
      <div className="flex items-center justify-center text-white text-xl md:text-4xl font-bold mb-6">:</div>
      
      <div className="flex flex-col items-center">
        <div className="bg-white p-2 md:p-4 text-center w-12 md:w-24">
          <span className="text-blue-800 font-bold text-xl md:text-4xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
        </div>
        <span className="text-white text-xs lg:text-xl mt-5">Minutes</span>
      </div>
      
      <div className="flex items-center justify-center text-white text-xl md:text-4xl font-bold mb-6">:</div>
      
      <div className="flex flex-col items-center">
        <div className="bg-white p-2 md:p-4 text-center w-12 md:w-24">
          <span className="text-blue-800 font-bold text-xl md:text-4xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
        <span className="text-white text-xs lg:text-xl mt-5">Seconds</span>
      </div>
    </div>
  );
};
