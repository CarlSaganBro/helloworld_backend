import { useEffect, useState } from "react";

function useCountdown(targetDate: string) {
  const countDownDate = new Date(targetDate).getTime();

  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(countDownDate),
  );

  useEffect(() => {
    // Update the countdown every single second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(countDownDate));
    }, 1000);

    // Clean up the interval when the component unmounts to save memory
    return () => clearInterval(interval);
  }, [countDownDate]);

  return timeLeft;
}

function calculateTimeLeft(targetTimestamp: number) {
  const difference = targetTimestamp - new Date().getTime();

  // If the target date has passed, return zeros
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isExpired: false,
  };
}

export const HomePage = ({}) => {
  const signupsCountdown = useCountdown("2026-07-14T23:59:59");
  const tournamentCountdown = useCountdown("2026-08-22T23:59:59");
  return (
    <div>
      <span>
        Signups close in
        {" " + signupsCountdown.days} days {signupsCountdown.hours} hours{" "}
        {signupsCountdown.minutes} minutes {signupsCountdown.seconds} seconds
      </span>
      <br />
      <span>
        Tournament starts in
        {" " + tournamentCountdown.days} days {tournamentCountdown.hours} hours{" "}
        {tournamentCountdown.minutes} minutes {tournamentCountdown.seconds}{" "}
        seconds
      </span>
    </div>
  );
};
